import React, { useContext, useEffect, useState } from 'react';
import { TextInput, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../contexts/UserLocationContext';
import AppMapView from './components/appmapview';

const Map = () => {
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

  return (
    <UserLocationContext.Provider value={{location, setLocation} as any}>
    <View style={styles.container}>
      <AppMapView />
      <Search />
      <Filter />
    </View>
    </UserLocationContext.Provider> 
  );
};

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