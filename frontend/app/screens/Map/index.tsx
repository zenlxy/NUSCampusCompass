import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Text, Image, TouchableOpacity, StyleSheet, View, Modal, ScrollView, Button, Platform, Linking, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../contexts/UserLocationContext';
import { Coordinates, Place } from '@/app/types/types';
import { places, images } from '@/app/data/Places';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from '@expo/vector-icons/FontAwesome6';
import { useLanguage } from '@/app/contexts/LanguageContext';
import i18n from '@/i18n';

const locationsOfInterest = places.map((place: Place) => ({
  name: place.name,
  coordinates: place.coordinates,
  description: place.description,
  images: place.images,
  history: place.history,
  funFacts: place.funFacts,
  address: place.address,
}));

const filterLocations = (category: string) => {
  if (!category) return places;
  return places.filter(place => place.type === category);
};


function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Place | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filteredLocations, setFilteredLocations] = useState<Place[]>(places);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const showLocationsOfInterest = () => {
    return filteredLocations.map((item) => (
      <Marker
        key={item.placeId}
        coordinate={item.coordinates || { latitude: 0, longitude: 0 }}
        onPress={() => {
          setSelectedLocation(item);
          console.log('Selected location:', item);
          setModalVisible(true);
        }}
      >
        <Icon name="location-dot" size={25} color="red" />
      </Marker>
    ));
  };

  const handleDirections = (destination: Coordinates) => {
    console.log('Opening directions to:', destination);
    const { latitude, longitude } = destination;
    const url = `http://maps.apple.com/?daddr=${latitude},${longitude}`;
    console.log('URL:', url);
    Linking.openURL(url);
  };

  const handleLocationSelect = (location: Place) => {
    setSelectedLocation(location);
    setModalVisible(true);
    setSearchInput('');
    setFilteredLocations([]);
    setIsSearchActive(false);
  };

  const handleFilter = (category: string) => {
    setFilteredLocations(filterLocations(category));
  };

  const handleSearchInputChange = (text: string) => {
    setSearchInput(text);
    if (text) {
      const filtered = places.filter(place =>
        place.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredLocations(filtered);
      setIsSearchActive(true);
    } else {
      setFilteredLocations(places);
      setIsSearchActive(false);
    }
  };

  const dismissSearch = () => {
    setIsSearchActive(false);
    setSearchInput('');
    Keyboard.dismiss();
  };

  return (
    <UserLocationContext.Provider value={{ location, setLocation } as any}>
      <TouchableWithoutFeedback onPress={dismissSearch}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location?.coords?.latitude || 1.3020,
            longitude: location?.coords?.longitude || 103.7730,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location?.coords?.latitude || 0,
              longitude: location?.coords?.longitude || 0,
            }}
          >
            <Icon name="location-dot" size={25} color="#047bff" />
          </Marker>
          {showLocationsOfInterest()}
        </MapView>
        <Search
          searchInput={searchInput}
          onSearchInputChange={handleSearchInputChange}
          filteredLocations={filteredLocations}
          onLocationSelect={(location) => {
            setSelectedLocation(location);
            setModalVisible(true);
          }}
        />
        <Filter onFilter={handleFilter} setFilterModalVisible={setFilterModalVisible} />

        {selectedLocation && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <ScrollView>
                  <Text style={styles.modalTitle}>{selectedLocation.name}</Text>
                  <Text style={styles.modalDescription}>{i18n.t(`placeDescription.${selectedLocation?.placeId}`)}</Text>
                  <View style={{ height: 170 }}>
                                <ScrollView style={styles.scrollView} horizontal>
                                    {selectedLocation?.images.map((image, index) => (
                                        <Image key={index} source={image.source} style={styles.image}></Image>
                                    ))}
                                </ScrollView>
                            </View>
                  <Button title={i18n.t('getDirections')} onPress={() => selectedLocation.coordinates && handleDirections(selectedLocation.coordinates)} />
                  <Button title={i18n.t('close')} onPress={() => setModalVisible(false)} />
                </ScrollView>
              </View>
            </View>
          </Modal>
        )}

        {filterModalVisible && (
          <Modal
            animationType="slide"
            transparent={true}
            visible={filterModalVisible}
            onRequestClose={() => setFilterModalVisible(false)}
          >
            <View style={styles.filterModalContainer}>
              <View style={styles.filterModalContent}>
                <Text style={styles.filterModalTitle}>{i18n.t('filterLocations')}</Text>
                <Button title={i18n.t('showAll')} onPress={() => { handleFilter(''); setFilterModalVisible(false); }} />
                <Button title={i18n.t('faculty')} onPress={() => { handleFilter('faculty'); setFilterModalVisible(false); }} />
                <Button title={i18n.t('food')} onPress={() => { handleFilter('food'); setFilterModalVisible(false); }} />
                <Button title={i18n.t('popularAttractions')} onPress={() => { handleFilter('attraction'); setFilterModalVisible(false); }} />
                <Button title={i18n.t('close')} onPress={() => setFilterModalVisible(false)} />
              </View>
            </View>
          </Modal>
        )}
      </View>
      </TouchableWithoutFeedback>
    </UserLocationContext.Provider>
  );
}


const Search = ({ searchInput, onSearchInputChange, filteredLocations, onLocationSelect }:
  { searchInput: string, onSearchInputChange: (text: string) => void, filteredLocations: Place[], onLocationSelect: (location: Place) => void }) => {
  useLanguage();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={i18n.t('search')}
        value={searchInput}
        onChangeText={onSearchInputChange}
      />
      <TouchableOpacity style={styles.searchButton}>
        <Image
          source={require('../../../assets/images/search.png')}
          style={styles.searchButton}
        />
      </TouchableOpacity>
      {searchInput !== '' && (
        <ScrollView style={styles.searchResultsContainer}>
          {filteredLocations.map((location, index) => (
            <TouchableOpacity key={index} onPress={() => onLocationSelect(location)}>
              <Text style={styles.searchResultItem}>{location.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const Filter = ({ onFilter, setFilterModalVisible }: { onFilter: (category: string) => void, setFilterModalVisible: (visible: boolean) => void }) => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.filterButton} onPress={() => setFilterModalVisible(true)}>
        <Image
          source={require('../../../assets/images/filter.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: '85%',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 5,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 35,
    paddingLeft: 10,
  },
  searchButton: {
    width: 20,
    height: 20,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchResultsContainer: {
    maxHeight: 200,
    backgroundColor: 'white',
    borderRadius: 5,
    position: 'absolute',
    top: 45,
    left: 10,
    right: 10,
    zIndex: 1000,
  },
  searchResultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  filterContainer: {
    position: 'absolute',
    top: 17,
    right: 10,
  },
  filterButton: {
    padding: 5,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  filterModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  filterModalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  filterModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    height: 150,
    width: 250,
    marginTop: 10,
    marginRight: 10,
    resizeMode: 'cover',
  },
  scrollView: {
    flexDirection: 'row',
  },
});

export default Map;
