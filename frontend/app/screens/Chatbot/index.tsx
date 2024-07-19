import React, { useState } from 'react';
import { Linking, View, Button } from 'react-native';

const botAvatar = require('../../../assets/images/avatar.png');

const BOT = {
    _id: 2,
    name: 'Mr. Bot',
    avatar: botAvatar,
};

const Chatbot = () => {

    const handlePress = () => {
        const url = `https://mediafiles.botpress.cloud/934f4951-5a2d-4b99-954e-b4d5419f28dd/webchat/bot.html`;
        Linking.openURL(url);
    };

    return (
        <View style={{ flex: 1, marginBottom: 90, alignItems: 'center', justifyContent: 'center' }}>
            <Button title='Use it on the web' onPress={handlePress} />
        </ View>
    )
}

export default Chatbot;