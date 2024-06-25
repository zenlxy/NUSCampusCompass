import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../../contexts/UserLocationContext';
import { useContext } from 'react';
import { Region } from 'react-native-maps';

const AppMapView = () => {
    const { location, setLocation } = useContext<any>(UserLocationContext);
    return location?.latitude && (
        <View>
            <MapView
                style={styles.map} 
                initialRegion={{
                    latitude: location?.latitude,
                    longitude: location?.longitude,
                    latitudeDelta: 0.0422,
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