import { Text, TextInput, Image, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from './components/logo';
import RegisterButton from "./components/registerbutton";
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup } = useAuth();
    const handleSignUp = async () => {
        if (password != confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            await signup(email, password);
            alert('Registered successfully!')
            console.log('Registered successfully');
        } catch (error) {
            alert((error as Error).message);
        }
    }
    return (
        <View style={styles.container}>
            <Logo />
            <View style={styles.textContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.text}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.text}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput style={styles.text}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword} />
            </View>
            <Button title="Register" onPress={handleSignUp} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flex: 0,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 2,
        marginLeft: 5,
    },
    text: {
        fontSize: 20,
        width: 240,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        paddingLeft: 15,
        padding: 2,
        paddingRight: 60,
    }
})

export default Register;