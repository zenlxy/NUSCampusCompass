import { useAuth } from '@/app/contexts/AuthContext';
import { itineraryRef } from '@/config/firebase';
import { getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';

type Place = {
    placeId: number;
    name: string;
    description: string;
    history: string;
    funFacts: string;
    address: string;
    coordinates: string;
};
type RootStackParamList = {
    Main: undefined;
    'Existing Itineraries': undefined;
    'Build Your Own': undefined;
    'Recommended Tours': undefined;
    'Edit Itinerary': {
        itineraryId: string;
        date: Date;
        title: string;
        places: Place[];
    };
};

const Existing = () => {
    const [trips, setTrips] = useState([]);
    const { user } = useAuth();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const fetchTrips = async () => {
        const q = query(itineraryRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        let data: any = [];
        querySnapshot.forEach(doc => {
            data.push({ ...doc.data(), id: doc.id })
        });
        setTrips(data);
    };

    useEffect(() => {
        fetchTrips();
    }, []);

    const handleStart = () => {
        console.log('Start Trip');
    };

    const handleDelete = async (id: string) => {
        try {
            const docRef = doc(itineraryRef, id);
            await deleteDoc(docRef);
            fetchTrips();
        } catch (error) {
            console.error("Error:", error)
        }
    };

    const itineraryList: ListRenderItem<any> = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.text}</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleStart}>
                        <Text>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { marginBottom: 10 }]} onPress={() => {
                        navigation.navigate("Edit Itinerary", {
                            itineraryId: item.id,
                            date: item.startDate,
                            title: item.text,
                            itinerary: item.itinerary,
                        });
                    }}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.delete} onPress={() => handleDelete(item.id)}>
                    <Icon name='trash' size={20} color='red' />
                </TouchableOpacity>
            </View>
        );
        return null;
    };
    return (
        <View>
            <FlatList data={trips}
                renderItem={itineraryList}
                ListEmptyComponent={
                    <View style={styles.messageBox}>
                        <Text style={styles.message}>You do not have any existing itineraries.</Text>
                    </View>
                }></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#90B8B8',
        marginLeft: 20,
        marginRight: 50,
        marginTop: 20,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#ffe8b8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 30,
        width: 50,
        marginRight: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Arial Bold',
        marginLeft: 20,
        width: 220,
    },
    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: 60,
    },
    messageBox: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 450,
    },
    message: {
        color: 'grey',
    }
})

export default Existing;