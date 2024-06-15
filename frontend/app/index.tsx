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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ItineraryStack = createStackNavigator();

const ItineraryStackScreen = () => (
    <ItineraryStack.Navigator>
        <ItineraryStack.Screen name="Main" component={Itinerary} options={{ headerShown: false }} />
        <ItineraryStack.Screen name="Existing Itineraries" component={Existing} />
        <ItineraryStack.Screen name="Build Your Own" component={Build} />
        <ItineraryStack.Screen name="Recommended Tours" component={Recommended} />
    </ItineraryStack.Navigator>
);

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            ...Bar,
            tabBarStyle: {
                ...Bar.tabBarStyle,
                position: 'absolute',
            },
        }}>
            <Tab.Screen name="Home Page" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/home.png')} label="Home" />
                ),
            }} />
            <Tab.Screen name="Map" component={Map} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/map.png')} label="Map" />
                ),
            }} />
            <Tab.Screen name="Itinerary" component={ItineraryStackScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/itinerary.png')} label="Itinerary" />
                ),
            }} />
            <Tab.Screen name="Chatbot" component={Chatbot} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/chatbot.png')} label="Chatbot" />
                ),
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} source={require('../assets/images/settings.png')} label="Settings" />
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
        </Stack.Navigator>
    );
};

export default function Index() {
    return (
        <NavigationContainer independent={true}>
            <AuthProvider>
                <StackNavigator />
            </AuthProvider>
        </NavigationContainer>
    );
}
