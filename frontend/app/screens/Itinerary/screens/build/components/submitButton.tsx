import { View, Button, StyleSheet } from 'react-native';

const SubmitButton = () => {
    return (
        <View style={styles.container}>
            <Button title='Save' color='white' onPress={() => console.log('save itinerary')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        width: 65,
        backgroundColor: '#047bff',
        marginStart: 153,
        borderRadius: 15,
    }
})

export default SubmitButton;