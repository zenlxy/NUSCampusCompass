import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Welcome />
            <Options />
        </View>
        );
    }

const Welcome = () => {
  return (
        <View style={styles.welcome}>
            <Text style={styles.welcometext}>Welcome back!</Text>
            <Image
                source={require('../../assets/images/logo.png')}
                style={{ width: 100, height: 100 }}
            />
        </View>
        );
}

const Options = () => {
    return (
        <View>
            <View style={styles.row}>
            <TouchableOpacity onPress={() => console.log("Map button pressed")} style={styles.boarder}>
                <Text style={styles.text}>Map</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Itinerary button pressed")} style={styles.boarder}>
                <Text style={styles.text}>Itinerary</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity onPress={() => console.log("Chatbot button pressed")} style={styles.boarder}>
                <Text style={styles.text}>Chatbot</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Settings button pressed")} style={styles.boarder}>
                <Text style={styles.text}>Settings</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
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
        fontSize: 20,
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    boarder: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 40,
        marginBottom: 10,
        width: 160,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
    },
    text: {
        fontSize: 20,
    }
})

export default Home;