import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../contexts/UserLocationContext';
import AppMapView from './components/appmapview';
import { Coordinates, Place } from '@/app/types/types';
import places from '@/app/data/Places';
import MapView, { Marker } from 'react-native-maps';
import Icon from '@expo/vector-icons/FontAwesome6';

const locationsOfInterest = places.map((place: Place) => ({
  title: place.name,
  location: place.coordinates,
  description: place.description,
}));


function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        >
        <Icon name="location-dot" size={25} color="red" />
        </Marker>
      )
    });
  }
  
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
                    longitude: location?.coords?.longitude || 0
                  }}
                > 
                  <Icon name="location-dot" size={25} color="#047bff" />
                </Marker>
                {showLocationsOfInterest()}
            </MapView>
        <Search />
        <Filter />
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
}

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
}

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
  searchAndFilterContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Map;