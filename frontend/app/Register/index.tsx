import { Text, TextInput, Image, View, Button, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from './components/logo';
import Email from './components/email';
import Username from './components/username';
import Password from './components/password';
import ConfirmPassword from './components/confirmpassword';
import RegisterButton from "./components/registerbutton";

type RegisterScreenNavigationProp = StackNavigationProp<any, 'Register'>;

const Register = () => {
    const navigation = useNavigation<RegisterScreenNavigationProp>(); // To navigate after successful registration

    // State hooks for each input field
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle registration
    const handleRegister = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert("Success", "User registered successfully");
                navigation.navigate('Login'); // Navigate to login page on success
            } else {
                Alert.alert("Error", data.message || "Something went wrong");
            }
        } catch (error) {
            Alert.alert("Error", "Failed to connect to the server");
            console.error('Error during registration:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Logo />
            <Email />
            <Username />
            <Password />
            <ConfirmPassword />
            <RegisterButton onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    }
})

export default Register;