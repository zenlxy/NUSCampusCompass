import { View, Text, Button } from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';


const LogoutButton = () => {
    const { logout } = useAuth();
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleLogout = async () => {
        try {
            await logout();
            console.log('Logged out successfully');
            navigation.navigate("Login");
        } catch (error) {
            alert((error as Error).message);
        }
    }

    return (
        <View>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}

export default LogoutButton;