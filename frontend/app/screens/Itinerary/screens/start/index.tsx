import { ScrollView, Text, View, StyleSheet, TextInput, FlatList, ListRenderItem, TouchableOpacity, Dimensions, Linking } from 'react-native';
import React, { useState, ReactNode, useEffect } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Place, RootStackParamList, Coordinates, Itinerary } from '@/app/types/types';
import Icon from '@expo/vector-icons/FontAwesome6';

type StartItineraryScreenRouteProp = RouteProp<RootStackParamList, 'Start Itinerary'>;

const Start = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<StartItineraryScreenRouteProp>();
    const { iti } = route.params;
    const [itinerary, setItinerary] = useState<Place[]>(iti?.itinerary || []);
    const { user } = useAuth();
    const [text, setText] = useState(iti?.text || "");

    const handleSave = async () => {
        console.log("end trip");
    };

    const handleFind = () => {
        console.log("Find Out More");
    };

    const getDirections = (destination: Coordinates) => {
        console.log('Opening directions to:', destination);
        const { latitude, longitude } = destination;
        const url = `http://maps.apple.com/?daddr=${latitude},${longitude}`;
        console.log('URL:', url);
        Linking.openURL(url);
    };

    const dottedLine = (item: Place) => {
        return (
            <View style={styles.directionsContainer}>
                <View style={styles.dottedLine} />
                <TouchableOpacity onPress={() => getDirections(item.coordinates)}>
                    <Text style={styles.directions}>Get Directions</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const itineraryList: ListRenderItem<Place> = ({ item, index }) => {
        return (
            <View>
                {dottedLine(item)}
                <View style={styles.itineraryItem}>
                    <View style={styles.rankContainer}>
                        <Icon name="location-pin" size='35' color='#8daba8' />
                        <Text style={styles.rank}>{index + 2}</Text>
                    </View>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <TouchableOpacity style={styles.findButton} onPress={handleFind}>
                        <Text style={styles.findText}>Find Out More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <ScrollView>
            <View style={styles.bigContainer}>
                <View style={styles.headercontainer}>
                    <Text style={styles.title}>{text}</Text>
                </View>
                <View style={styles.locationItem}>
                    <View style={styles.rankContainer}>
                        <Icon name="location-pin" size='35' color='#8daba8' />
                        <Text style={styles.rank}>1</Text>
                    </View>
                    <Text style={styles.itemText}>Your Location</Text>
                </View>
                <FlatList data={itinerary} renderItem={itineraryList} />
                <View style={styles.endContainer}>
                    <TouchableOpacity style={styles.endButton} onPress={handleSave} >
                        <Text>End Trip</Text>
                    </ TouchableOpacity>
                </View >
            </View>
        </ScrollView>
    )
}

const { width: screenWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    bigContainer: {
        justifyContent: 'center',
        marginBottom: 95,
    },
    itineraryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        width: screenWidth,
    },
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        width: screenWidth,
    },
    rankContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    rank: {
        fontSize: 15,
        position: 'absolute',
    },
    itemText: {
        paddingHorizontal: 10,
        width: '65%',
    },
    endContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    endButton: {
        backgroundColor: '#8daba8',
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderRadius: 7,
    },
    headercontainer: {
        flexDirection: "row",
        paddingVertical: 10,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#8daba8',
        marginBottom: 10,
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
    },
    findButton: {
        backgroundColor: '#ffe5ac',
        width: '27%',
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 7,
    },
    findText: {
        fontSize: 12,
    },
    dottedLine: {
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'dotted',
        width: 0,
        height: 30,
        marginVertical: 10,
        marginLeft: '6%',
    },
    directionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    directions: {
        color: '#047bff',
        paddingLeft: 20,
    }
})

export default Start;