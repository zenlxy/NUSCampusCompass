import { Button, Text, View, StyleSheet, TextInput, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, ReactNode } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, eachDayOfInterval } from 'date-fns';
import places from '../../../../../data/Places';

type Place = {
    placeId: number;
    name: string;
    description: string;
    history: string;
    funFacts: string;
    address: string;
    coordinates: string;
};

const AddDatesButton = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [startDate, setStartDate] = useState(new Date());
    const [showStartPicker, setShowStartPicker] = useState(true);
    const [userInput, setUserInput] = useState("");
    const filterData: ListRenderItem<Place> = ({ item }) => {
        if (userInput === "") {
            return (
                <View style={styles.place}>
                    <TouchableOpacity onPress={() => setUserInput(item.name)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        if (item.name.toLowerCase().includes(userInput.toLowerCase())) {
            return (
                <View style={styles.place}>
                    <TouchableOpacity onPress={() => setUserInput(item.name)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return null;
    };
    return (
        <View style={styles.bigContainer}>
            <View style={styles.container}>
                <Text>Select Date:</Text>
                <DateTimePicker
                    value={startDate}
                    mode="date"
                    display="default"
                    onChange={(event, date) => {
                        setShowStartPicker(true);
                        setStartDate(date || startDate);
                    }}
                    style={styles.date}
                />
            </View>
            <View style={styles.datePickerContainer}>
                <View style={styles.container}>
                    <TextInput
                        placeholder='Add Place'
                        style={styles.input}
                        onChangeText={(text) => setUserInput(text)}
                        value={userInput}
                    />
                    <Button title="Add" onPress={() => console.log('add place')} />
                </View>
                <FlatList data={places} renderItem={filterData} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        marginTop: 10,
    },
    container: {
        width: 'auto',
        paddingLeft: 20,
        alignItems: 'center',
        marginTop: 5,
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
        marginBottom: 10,
    },
    input: {
        paddingLeft: 15,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        width: 280,
        borderRadius: 20,
        height: 30,
        fontSize: 15,
        paddingRight: 15,
    },
    place: {
        paddingLeft: 10,
        backgroundColor: "white",
        width: '80%',
        marginLeft: 20,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        marginBottom: 5,
    }
})

export default AddDatesButton;