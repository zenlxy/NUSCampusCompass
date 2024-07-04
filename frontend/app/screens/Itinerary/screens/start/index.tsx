import { Button, Text, View, StyleSheet, TextInput, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import React, { useState, ReactNode, useEffect } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Place, RootStackParamList, Coordinates, Itinerary } from '@/app/types/types';

type StartItineraryScreenRouteProp = RouteProp<RootStackParamList, 'Start Itinerary'>;

const Start = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<StartItineraryScreenRouteProp>();
    const { iti } = route.params;
    const initialStartDate = iti?.startDate ? new Date(iti.startDate.toDate()) : new Date();
    const [start, setStart] = useState<Date>(isNaN(initialStartDate.getTime()) ? new Date() : initialStartDate);
    const [itinerary, setItinerary] = useState<Place[]>(iti?.itinerary || []);
    const { user } = useAuth();
    const [text, setText] = useState(iti?.text || "");

    const handleSave = async () => {
        console.log("end trip");
    };
    const itineraryList: ListRenderItem<Place> = ({ item, index }) => {
        return (
            <View style={styles.itineraryItem}>
                <View style={styles.rankContainer}>
                    <Text style={styles.rank}>{index + 1}</Text>
                </View>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={styles.bigContainer}>
            <View style={styles.headercontainer}>
                <Text>{text}</Text>
            </View>
            <FlatList data={itinerary} renderItem={itineraryList} />
            <View style={styles.endContainer}>
                <TouchableOpacity onPress={handleSave} >
                    <Text>End Trip</Text>
                </ TouchableOpacity>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        justifyContent: 'center',
    },
    itineraryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    rankContainer: {
        backgroundColor: '#8daba8',
        width: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
    },
    rank: {
        fontSize: 15,
    },
    itemText: {
        width: 250,
        paddingLeft: 5,
    },
    endContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    headercontainer: {
        flexDirection: "row",
        paddingTop: 10,
        alignContent: 'center',
        justifyContent: 'center',
    },
})

export default Start;