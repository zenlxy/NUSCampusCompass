import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity, Image, TextInput, Button, Alert } from 'react-native';

const Feedback = () => {
    const [defaultRating, setDefaultRating] = useState(3);
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
    const [feedback, setFeedback] = useState('');

    const starImgFilled = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    const starImgCorner = 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {
                maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImgFilled }
                                        : { uri: starImgCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const handleSubmit = () => {
        // Handle the feedback submission
        Alert.alert("Feedback Submitted", `Rating: ${defaultRating}\nFeedback: ${feedback}`);
        // You can also send this data to a server or store it locally
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Please Rate Us</Text>
            <CustomRatingBar />
            <TextInput
                style={styles.textInput}
                placeholder="Write your feedback here..."
                value={feedback}
                onChangeText={setFeedback}
                multiline
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    textInput: {
        width: '75%',
        height: 110,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
        marginTop: 40,
        textAlignVertical: 'top', 
    },
    submitButton: {
        backgroundColor: '#90B8B8',
        padding: 10,
        borderRadius: 15,
        marginTop: 30,
    },
    submitButtonText: {
        fontSize: 15,
        textAlign: 'center',
    },
});

export default Feedback;
