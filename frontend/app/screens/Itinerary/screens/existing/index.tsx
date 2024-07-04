import { useAuth } from '@/app/contexts/AuthContext';
import { itineraryRef } from '@/config/firebase';
import { getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import React, { useCallback, useState } from 'react';
import { View, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { Place, RootStackParamList, Coordinates, Itinerary } from '@/app/types/types';
import { useFocusEffect } from '@react-navigation/native';

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

    useFocusEffect(
        useCallback(() => {
            fetchTrips();
        }, [])
    );

    const handleDelete = async (id: string) => {
        try {
            const docRef = doc(itineraryRef, id);
            await deleteDoc(docRef);
            fetchTrips();
        } catch (error) {
            console.error("Error:", error)
        }
    };

    const itineraryList: ListRenderItem<Itinerary> = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.text}</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        const iti = item;
                        navigation.navigate("Start Itinerary", { iti });
                    }}>
                        <Text>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { marginBottom: 10 }]} onPress={() => {
                        const iti = item;
                        navigation.navigate("Edit Itinerary", { iti });
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
        marginTop: 20,
        borderRadius: 20,
        width: 300,
    },
    button: {
        backgroundColor: '#ffe8b8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 30,
        width: 50,
        marginTop: 10,
        marginRight: 30,
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