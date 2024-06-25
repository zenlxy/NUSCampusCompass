import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../../contexts/UserLocationContext';
import { useContext } from 'react';
import { Region } from 'react-native-maps';

const AppMapView = () => {
    const { location, setLocation } = useContext<any>(UserLocationContext);
    return location?.coords?.latitude && (
        <View>
            <MapView
                style={styles.map} 
                initialRegion={{
                    latitude: location?.coords?.latitude || 37.78825,
                    longitude: location?.coords?.longitude || -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
      },
  })
  
  export default AppMapView;