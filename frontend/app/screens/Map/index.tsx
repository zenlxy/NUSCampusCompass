import React from 'react';
import MapView from 'react-native-maps';
import { TextInput, Image, TouchableOpacity, StyleSheet, View } from 'react-native';

const Map = () => {
  return (
      <View style={styles.container}>
          <Maps />
          <View style={styles.searchAndFilterContainer}>
            <Search />
            <Filter />
          </View>
      </View>
  );
}

const Maps = () => {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
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
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top: 2,
    left: 5,
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
    top: 15,
    right: 10,
  },
  filterButton: {
    padding: 0,
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