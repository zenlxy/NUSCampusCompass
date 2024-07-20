import { View, Image, Text, StyleSheet } from 'react-native';
import { AuthProvider } from './contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './screens/Register';
import Login from './screens/Login';
import Home from './screens/Home';
import Map from './screens/Map';
import Itinerary from './screens/Itinerary';
import Chatbot from './screens/Chatbot';
import Settings from './screens/Settings';
import Existing from './screens/Itinerary/screens/existing';
import Build from './screens/Itinerary/screens/build';
import Recommended from './screens/Itinerary/screens/recommended';
import Edit from './screens/Itinerary/screens/edit';
import Start from './screens/Itinerary/screens/start';
import StartReco from './screens/Itinerary/screens/startreco';
import LanguagePreference from './screens/Settings/screens/language';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/es';
import 'intl/locale-data/jsonp/fr';
import i18n from '../i18n';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ItineraryStack = createStackNavigator();
const LanguageStack = createStackNavigator();

const ItineraryStackScreen = () => (
    <ItineraryStack.Navigator>
        <ItineraryStack.Screen name="Main" component={Itinerary} options={{ headerShown: false }} />
        <ItineraryStack.Screen name="Existing Itineraries" component={Existing} />
        <ItineraryStack.Screen name="Build Your Own" component={Build} options={{ headerShown: false }} />
        <ItineraryStack.Screen name="Recommended Tours" component={Recommended} />
        <ItineraryStack.Screen name="Edit Itinerary" component={Edit} options={{ headerShown: false }} />
        <ItineraryStack.Screen name="Start Itinerary" component={Start} options={{ headerShown: false }} />
        <ItineraryStack.Screen name="Start Recommended" component={StartReco} options={{ headerShown: false }} />
    </ItineraryStack.Navigator>
);

const LanguageStackNavigator = () => {
    useLanguage();
    return (
        <LanguageStack.Navigator>
            <LanguageStack.Screen 
                name="Language Preference Screen" 
                component={LanguagePreference} 
                options={{ headerTitle: i18n.t('languagePreference') }} 
            />
        </LanguageStack.Navigator>
    );
  };

const BottomTabNavigator = () => {
    useLanguage();
    return (
        <Tab.Navigator screenOptions={{
            ...Bar,
            tabBarStyle: {
                ...Bar.tabBarStyle,
                position: 'absolute',
            },
        }}>
            <Tab.Screen name={i18n.t('home')} component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/home.png')} label={i18n.t('home')} />
                ),
            }} />
            <Tab.Screen name={i18n.t('map')} component={Map} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/map.png')} label={i18n.t('map')} />
                ),
            }} />
            <Tab.Screen name={i18n.t('itinerary')} component={ItineraryStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/itinerary.png')} label={i18n.t('itinerary')} />
                ),
            }} />
            <Tab.Screen name={i18n.t('chatbot')} component={Chatbot} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/chatbot.png')} label={i18n.t('chatbot')} />
                ),
            }} />
            <Tab.Screen name={i18n.t('settings')} component={Settings} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/settings.png')} label={i18n.t('settings')} />
                ),
            }} />
        </Tab.Navigator>
    );
};

const TabIcon = ({ focused, source, label }: { focused: boolean, source: any, label: string }) => (
    <View style={styles.iconContainer}>
        <Image
            source={source}
            resizeMode="contain"
            style={{
                ...styles.iconImage,
                tintColor: focused ? '#127249' : '#748c94',
            }}
        />
        <Text style={{
            ...styles.iconLabel,
            color: focused ? '#127249' : '#748c94',
        }}>
            {label}
        </Text>
    </View>
);

const Bar = {
    tabBarShowLabel: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundColor: '#ffffff',
        height: 90,
    },
};

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
    },
    iconImage: {
        width: 25,
        height: 25,
    },
    iconLabel: {
        fontSize: 12,
    },
});

const StackNavigator = () => {
    useLanguage();
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: true }}
            />
            <Stack.Screen
                name="Home"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Language Preference Stack"
                component={LanguageStackNavigator} 
                options={{ headerShown: false }} 
            />
        </Stack.Navigator>
    );
};

export default function Index() {
    return (
        <NavigationContainer independent={true}>
            <AuthProvider>
                <LanguageProvider>
                    <StackNavigator />
                </LanguageProvider>
            </AuthProvider>
        </NavigationContainer>
    );
}
