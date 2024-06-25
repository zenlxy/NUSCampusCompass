import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import { UserLocationContext } from '../../../contexts/UserLocationContext';
import { useContext } from 'react';
import { Region } from 'react-native-maps';
import Icon from '@expo/vector-icons/FontAwesome6';

const AppMapView = () => {
    const { location, setLocation } = useContext<any>(UserLocationContext);
    return location?.coords?.latitude && (
        <View>
            <MapView
                style={styles.map} 
                initialRegion={{
                    latitude: location?.coords?.latitude || 1.3521,
                    longitude: location?.coords?.longitude || 103.8198,
                    latitudeDelta: 0.0122,
                    longitudeDelta: 0.0121,
                }} 
            >
                <Marker
                    coordinate={{
                        latitude: location?.coords?.latitude,
                        longitude: location?.coords?.longitude
                    }}
                > 
                    <Icon name="location-dot" size={30} color="#047bff" />
                </Marker>
            </MapView>
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