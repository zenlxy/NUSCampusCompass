import { useAuth } from '@/app/contexts/AuthContext';
import { itineraryRef } from '@/config/firebase';
import { getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { View, FlatList, ListRenderItem, StyleSheet, Text, Button } from 'react-native';

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
    }, [])
    const itineraryList: ListRenderItem<any> = ({ item, index }) => {
        return (
            <View >
                <Text >{item.text}</Text>
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
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    button: {
        backgroundColor: '#90B8B8',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 15,
    },
    text: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Rubik'
    },
})

export default Existing;