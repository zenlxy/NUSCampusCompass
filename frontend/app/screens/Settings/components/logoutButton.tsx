import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.text}>{i18n.t('logout')}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#90B8B8',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 15,
    },
    text: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Rubik'
    },
})

export default LogoutButton;