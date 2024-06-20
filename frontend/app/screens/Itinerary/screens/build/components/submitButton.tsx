import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome6';

const SubmitButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('save itinerary')} >
                <View style={styles.button}>
                    <Text style={styles.text}>Save</Text>
                    <Icon name="arrow-down" size={20} color="white" />
                </View>
            </ TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
        backgroundColor: '#047bff',
        height: 30,
        borderRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    text: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Arial',
    }
})

export default SubmitButton;