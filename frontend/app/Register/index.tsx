import { Text, TextInput, Image, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Logo from './components/logo';
import Email from './components/email';
import Username from './components/username';
import Password from './components/password';
import ConfirmPassword from './components/confirmpassword';
import RegisterButton from "./components/registerbutton";

const Register = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Email />
            <Username />
            <Password />
            <ConfirmPassword />
            <RegisterButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Register;