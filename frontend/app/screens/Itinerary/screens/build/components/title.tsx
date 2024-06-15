import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';

function Title() {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('Rename with Title');
    const [inputValue, setInputValue] = useState(text);

    const handleBlur = () => {
        setIsEditing(false);
        setText(inputValue);
    };

    return (
        <View style={styles.container}>
            {isEditing ? (
                <TextInput
                    style={styles.input}
                    value={inputValue}
                    onChangeText={setInputValue}
                    onBlur={handleBlur}
                    onSubmitEditing={handleBlur}
                    autoFocus
                />
            ) : (
                <View style={styles.displayContainer}>
                    <Text style={styles.text}>{text}</Text>
                    <TouchableOpacity onPress={() => setIsEditing(true)} style={styles.iconContainer}>
                        <Icon name="pencil" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        paddingTop: 12,
    },
    displayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
    input: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#90B8B8',
    },
    iconContainer: {
        paddingLeft: 20,
    },
});

export default Title;