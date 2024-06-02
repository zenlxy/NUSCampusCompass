import { Text, TextInput, Image, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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

const Logo = () => {
    return (
        <View>
            <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 180, height: 180 }}
            />
        </View>
    )
}

const Email = () => {
    return (
        <View style={styles.email}>
            <TextInput style={styles.text} placeholder="Email" />
        </View>
    )
}

const Username = () => {
    return (
        <View style={styles.username}>
            <TextInput style={styles.text} placeholder="Username" />
        </View>
    )
}

const Password = () => {
    return (
        <View style={styles.password}>
            <TextInput style={styles.text} placeholder="Password" />
        </View>
    )
}

const ConfirmPassword = () => {
    return (
        <View style={styles.confirmpassword}>
            <TextInput style={styles.text} placeholder="Confirm Password" />
        </View>
    )
}

const RegisterButton = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View>
            <Button title="Register" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        flex: 0,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        flex: 0,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    password: {
        flex: 0,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmpassword: {
        flex: 0,
        paddingTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
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