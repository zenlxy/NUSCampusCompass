import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Text, Image, TouchableOpacity, StyleSheet, View, Modal, ScrollView, Button, Platform, Linking } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../contexts/UserLocationContext';
import { Coordinates, Place } from '@/app/types/types';
import places from '@/app/data/Places';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from '@expo/vector-icons/FontAwesome6';

const locationsOfInterest = places.map((place: Place) => ({
  name: place.name,
  location: place.coordinates,
  description: place.description,
  images: place.images,
}));

function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Place | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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
    return locationsOfInterest.map((item, index) => (
      <Marker
        key={index}
        coordinate={item.location || { latitude: 0, longitude: 0 }} // Default value for the coordinate prop
        onPress={() => {
          setSelectedLocation({ ...item, placeId: index }); // Add the missing placeId property
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
  

  return (
    <UserLocationContext.Provider value={{ location, setLocation } as any}>
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
        <Search />
        <Filter />

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
                  <Text style={styles.modalDescription}>{selectedLocation.description}</Text>
                  {(selectedLocation.images ?? []).map((image, index) => {
                    return <Image key={index} source={{ uri: image.source }} style={styles.modalImage} />;
                  })}
                  <Button title="Get Directions" onPress={() => selectedLocation.coordinates && handleDirections(selectedLocation.coordinates)} />
                  <Button title="Close" onPress={() => setModalVisible(false)} />
                </ScrollView>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </UserLocationContext.Provider>
  );
}

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
      <TouchableOpacity
        style={styles.searchButton}
      >
        <Image
          source={require('../../../assets/images/search.png')}
          style={styles.searchButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const Filter = () => {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity style={styles.filterButton}>
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
});

export default Map;
