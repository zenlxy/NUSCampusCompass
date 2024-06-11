import { View, StyleSheet } from "react-native";
import { AuthProvider } from './contexts/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './Register';
import Login from './Login';
import Home from './Home';


const Stack = createStackNavigator();

export default function Index() {
    return (
        <NavigationContainer independent={true}>
            <AuthProvider>
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}