import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoutButton from './components/logoutButton';
import LanguageButton from './components/languageButton';
import FeedbackButton from './components/feedbackButton';
import { useLanguage } from '../../contexts/LanguageContext';

const Settings = () => {
    useLanguage();
    return (
        <View>
            <LanguageButton />
            <FeedbackButton />
            <LogoutButton />
        </View>
    );
};


export default Settings;
