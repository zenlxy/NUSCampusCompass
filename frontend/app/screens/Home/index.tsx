import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from "react-native";
import { auth } from "../../../config/firebase";

const Home = () => {
    return (
        <View style={styles.container}>
            <Welcome />
        </View>
    );
}

const Welcome = () => {
    return (
        <View style={styles.welcome}>
            <Image
                source={require('../../../assets/images/logo.png')}
                style={{ width: 150, height: 150 }}
            />
            <Text style={styles.welcometext}>Welcome back, {auth.currentUser?.email}!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        flex: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 100,
        alignItems: 'center',
    },
    welcometext: {
        fontSize: 20,
        marginTop: 30,
        fontFamily: 'Arial Rounded MT Bold',
        textAlign: 'center',
    }
})

export default Home;