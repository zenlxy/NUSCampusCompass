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
            <Text style={styles.welcometext}>Welcome back, {auth.currentUser?.email}!</Text>
            <Image
                source={require('../../../assets/images/logo.png')}
                style={{ width: 100, height: 100 }}
            />
        </View>
        );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    welcome: {
        flex: 0,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    welcometext: {
        fontSize: 15,
        marginBottom: 10,
    }
})

export default Home;