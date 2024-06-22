import { useAuth } from '@/app/contexts/AuthContext';
import { itineraryRef } from '@/config/firebase';
import { getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const Existing = () => {
    const [trips, setTrips] = useState([]);
    const { user } = useAuth();
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

    const handleEdit = () => {
        console.log('Edit Trip');
    };

    const itineraryList: ListRenderItem<any> = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.text}</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={handleStart}>
                        <Text>Start</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { marginBottom: 10 }]} onPress={handleEdit}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        return null;
    };
    return (
        <View>
            <FlatList data={trips} renderItem={itineraryList}></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#90B8B8',
        marginHorizontal: 20,
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
        width: 240,
    },
})

export default Existing;