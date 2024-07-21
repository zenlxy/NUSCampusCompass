import { ScrollView, Text, View, StyleSheet, Button, FlatList, ListRenderItem, TouchableOpacity, Dimensions, Linking, Modal, Alert, Image } from 'react-native';
import React, { useState, ReactNode, useEffect } from 'react';
import { useAuth } from '../../../../contexts/AuthContext';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Place, RootStackParamList, Coordinates, Itinerary } from '@/app/types/types';
import Icon from '@expo/vector-icons/FontAwesome6';
import { itineraryRef } from '@/config/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import { useLanguage } from '@/app/contexts/LanguageContext';
import i18n from '@/i18n';

type StartItineraryScreenRouteProp = RouteProp<RootStackParamList, 'Start Recommended'>;

const StartReco = () => {
    useLanguage();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<StartItineraryScreenRouteProp>();
    const { iti } = route.params;
    const [itinerary, setItinerary] = useState<Place[]>(iti?.itinerary || []);
    const { user } = useAuth();
    const [text, setText] = useState(iti?.text || "");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

    const handleDelete = async (id: string) => {
        try {
            const docRef = doc(itineraryRef, id);
            await deleteDoc(docRef);
            alert('Itinerary Deleted');
            navigation.navigate('Existing Itineraries');
        } catch (error) {
            console.error("Error:", error)
        }
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
                    <Text style={styles.directions}>{i18n.t('getDirections')}</Text>
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
                    <TouchableOpacity style={styles.findButton} onPress={() => {
                        setModalVisible(true);
                        setSelectedPlace(item)
                    }}>
                        <Text style={styles.findText}> More</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View>
            <FlatList
                data={itinerary}
                renderItem={itineraryList}
                ListHeaderComponent={() => (
                    <View >
                        <View style={styles.headercontainer}>
                            <Text style={styles.title}>{text}</Text>
                        </View>
                        <View style={styles.locationItem}>
                            <View style={styles.rankContainer}>
                                <Icon name="location-pin" size={35} color='#8daba8' />
                                <Text style={styles.rank}>1</Text>
                            </View>
                            <Text style={styles.itemText}>{i18n.t('yourLocation')}</Text>
                        </View>
                    </View>
                )}
                ListFooterComponent={() => (
                    <View style={styles.endContainer}>
                        <TouchableOpacity style={styles.endButton} onPress={() => navigation.navigate('Recommended Tours')}>
                            <Text>{i18n.t('endTrip')}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.bigContainer}
            />
            <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.border}>
                                <Text style={styles.title}>{selectedPlace?.name}</Text>
                            </View>
                            <View style={{ height: 170 }}>
                                <ScrollView style={styles.scrollView} horizontal>
                                    {selectedPlace?.images.map((image, index) => (
                                        <Image key={index} source={image.source} style={styles.image}></Image>
                                    ))}
                                </ScrollView>
                            </View>
                            <Text style={styles.headerText}>Description</Text>
                            <Text style={styles.bodyText}>{selectedPlace?.description}</Text>
                            <Text style={styles.headerText}>History</Text>
                            <Text style={styles.bodyText}>{selectedPlace?.history}</Text>
                            <Text style={styles.headerText}>Fun Facts</Text>
                            {selectedPlace?.funFacts
                                .split('/')
                                .map(fact => fact.trim())
                                .filter(fact => fact.length > 0)
                                .map((fact, index) => (
                                    <Text key={index} style={styles.bodyText}>{fact}</Text>))}
                        </ScrollView>
                        <View style={{ paddingTop: 10 }}>
                            <Button title='Close' onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
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
        marginBottom: 95,
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
    },
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5,
        paddingLeft: 10,
    },
    bodyText: {
        fontSize: 13,
        backgroundColor: '#fff6e1',
        padding: 10,
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        paddingBottom: 5,
    },
    modalContent: {
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        paddingTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    image: {
        height: 150,
        width: 250,
        marginTop: 10,
        marginRight: 10,
        resizeMode: 'cover',
    },
    scrollView: {
        flexDirection: 'row',
    }
})

export default StartReco;