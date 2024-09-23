import { Button, Text, View, StyleSheet, TextInput, FlatList, ListRenderItem, TouchableOpacity, Platform } from 'react-native';
import React, { useState, ReactNode, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { places } from '../../../../data/Places';
import { addDoc, doc, getDocs, onSnapshot, query, setDoc, where, Timestamp } from 'firebase/firestore';
import { itineraryRef } from '@/config/firebase';
import { useAuth } from '../../../../contexts/AuthContext';
import Icon from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Place, RootStackParamList, Coordinates, Itinerary } from '@/app/types/types';
import { useLanguage } from '@/app/contexts/LanguageContext';
import i18n from '@/i18n';

type EditItineraryScreenRouteProp = RouteProp<RootStackParamList, 'Edit Itinerary'>;

const Edit = () => {
    useLanguage();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<EditItineraryScreenRouteProp>();
    const { iti } = route.params;
    const initialStartDate = iti?.startDate ? new Date(iti.startDate.toDate()) : new Date();
    console.log(initialStartDate);
    const [start, setStart] = useState<Date>(isNaN(initialStartDate.getTime()) ? new Date() : initialStartDate);
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [userInput, setUserInput] = useState("");
    const [toAdd, setToAdd] = useState<Place>(places[1]);
    const [itinerary, setItinerary] = useState<Place[]>(iti?.itinerary || []);
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(iti?.text || "");
    const [inputValue, setInputValue] = useState(text);

    const handleBlur = () => {
        setIsEditing(false);
        setText(inputValue);
    };

    const handleSave = async () => {
        if (itinerary.length > 0) {
            const itineraryDocRef = doc(itineraryRef, iti.id);
            await setDoc(itineraryDocRef, {
                startDate: Timestamp.fromDate(start),
                text: text,
                itinerary: itinerary,
            }, { merge: true });
            navigation.navigate("Existing Itineraries");
        } else {
            alert("Itinerary cannot be empty. Please add at least one item.");
        }
    };
    const itineraryList: ListRenderItem<Place> = ({ item, index }) => {
        return (
            <View style={styles.itineraryItem}>
                <View style={styles.rankContainer}>
                    <Text style={styles.rank}>{index + 1}</Text>
                </View>
                <Text style={styles.itemText}>{item.name}</Text>
                <Button title={i18n.t('delete')} color="red" onPress={() => handleDeletePlace(item.placeId)} />
            </View>
        );
        return null;
    };
    const handleDeletePlace = (placeId: number) => {
        setItinerary(itinerary.filter(place => place.placeId !== placeId));
    };
    const calendar = () => {
        if (Platform.OS === 'android') {
            return (
                <View>
                    <View style={styles.container}>
                        <Text>{i18n.t('selectDate')}:</Text>
                        <Button
                            title={start.toDateString()}
                            onPress={() => setShowStartPicker(true)}
                        />
                    </View>
                    {showStartPicker && (
                        <DateTimePicker
                            value={start}
                            mode="date"
                            onChange={(event, selectedDate) => {
                                setShowStartPicker(false);
                                if (selectedDate) {
                                    setStart(selectedDate);
                                }
                            }}
                            style={styles.date}
                        />
                    )}
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <Text>{i18n.t('selectDate')}:</Text>
                    <DateTimePicker
                        value={start}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                            setShowStartPicker(true);
                            if (selectedDate) {
                                setStart(selectedDate);
                            }
                        }}
                        style={styles.date}
                    />
                </View>
            )
        }
    };
    const filterData: ListRenderItem<Place> = ({ item }) => {
        if (userInput === "") {
            return (
                <View style={styles.place}>
                    <TouchableOpacity onPress={() => {
                        setUserInput(item.name);
                        setToAdd(item);
                    }}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
            return (
                <View style={styles.place}>
                    <TouchableOpacity onPress={() => {
                        setUserInput(item.name);
                        setToAdd(item);
                    }}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return null;
    };
    return (
        <View style={styles.bigContainer}>
            <View style={styles.headercontainer}>
                <View style={styles.backcontainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("Existing Itineraries")}>
                        <Icon name="arrow-left" size={20} color="#047bff" />
                    </ TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    {isEditing ? (
                        <TextInput
                            style={styles.titleInput}
                            value={inputValue}
                            onChangeText={setInputValue}
                            onBlur={handleBlur}
                            onSubmitEditing={handleBlur}
                            autoFocus
                        />
                    ) : (
                        <View style={styles.displayContainer}>
                            <Text style={styles.titleText}>{text}</Text>
                            <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.iconContainer}>
                                <Icon name="pencil" size={20} color="black" />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
            <View>
                {calendar()}
            </View>
            <View style={styles.datePickerContainer}>
                <View style={styles.basic}>
                    <Text>{i18n.t('addPlace')}</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        placeholder={i18n.t('addPlace')}
                        style={styles.input}
                        onChangeText={(text) => setUserInput(text)}
                        value={userInput}
                    />
                    <Button title={i18n.t('add')} onPress={() => {
                        setItinerary([...itinerary, toAdd]);
                        setUserInput("");
                    }} />
                </View>
                <View style={styles.basic}>
                    <FlatList data={places} renderItem={filterData} />
                </View>
            </View>
            <FlatList data={itinerary} renderItem={itineraryList} />
            <View style={styles.saveContainer}>
                <TouchableOpacity onPress={handleSave} >
                    <View style={styles.saveButton}>
                        <Text style={styles.saveText}>{i18n.t('save')}</Text>
                        <Icon name="arrow-down" size={20} color="white" />
                    </View>
                </ TouchableOpacity>
            </View >
        </View>
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        justifyContent: 'center',
    },
    container: {
        width: 'auto',
        alignItems: 'center',
        paddingLeft: 20,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#90B8B8',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 15,
        marginTop: 15,
    },
    text: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Rubik',
        paddingLeft: 20,
        paddingTop: 20,
    },
    date: {
        paddingTop: 10,
    },
    datePickerContainer: {
        flexDirection: 'column',
        paddingBottom: 35,
        height: 130,
        justifyContent: 'center',
        paddingTop: 25,
    },
    input: {
        paddingLeft: 15,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 300,
        borderRadius: 20,
        height: 30,
        fontSize: 15,
        paddingRight: 15,
    },
    place: {
        paddingLeft: 10,
        backgroundColor: "white",
        width: '80%',
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 5,
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
    basic: {
        marginLeft: 20,
    },
    saveContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    saveButton: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        backgroundColor: '#047bff',
        height: 30,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    saveText: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Arial',
    },
    titleContainer: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    displayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
    },
    titleInput: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#90B8B8',
    },
    iconContainer: {
        paddingLeft: 10,
    },
    headercontainer: {
        flexDirection: "row",
    },
    backcontainer: {
        paddingLeft: 10,
        paddingTop: 10,
    }
})

export default Edit;