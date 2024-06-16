import { Button, Text, View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, eachDayOfInterval } from 'date-fns';

const AddDatesButton = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartPicker, setShowStartPicker] = useState(true);
    const [showEndPicker, setShowEndPicker] = useState(true);
    const datesInRange = eachDayOfInterval({ start: new Date(startDate), end: new Date(endDate) });
    return (
        <View style={styles.bigContainer}>
            <View style={styles.container}>
                <Text>Select Start Date:</Text>
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
            <View style={styles.container}>
                <Text>Select End Date:</Text>
                <DateTimePicker
                    value={endDate}
                    mode="date"
                    display="default"
                    minimumDate={startDate}
                    onChange={(event, date) => {
                        setShowEndPicker(true);
                        setEndDate(date || endDate);
                    }}
                />
            </View>
            {datesInRange.map((date) => {
                const dateKey = format(date, 'yyyy-MM-dd');
                return (
                    <View key={dateKey} style={styles.datePickerContainer}>
                        <Text style={styles.text}>{format(date, 'do MMM')}</Text>
                        <View style={styles.container}>
                            <TextInput
                                placeholder='Add Place'
                                style={styles.input}
                            />
                            <Button title="Add" onPress={() => console.log('add place')} />
                        </View>
                    </View>
                );
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    bigContainer: {
        marginTop: 20,
    },
    container: {
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#90B8B8',
        width: '70%',
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
        paddingTop: 5,
    },
    datePickerContainer: {
        flexDirection: 'column',
        marginBottom: 20,
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
    }
})

export default AddDatesButton;