import { View, Text, Button } from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import i18n from '../../../../i18n'
import { useLanguage } from '../../../contexts/LanguageContext';


const LogoutButton = () => {
    const { logout } = useAuth();
    const navigation = useNavigation<StackNavigationProp<any>>();
    useLanguage()

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
            <Button title={i18n.t('logout')} onPress={handleLogout} />
        </View>
    );
}

export default LogoutButton;