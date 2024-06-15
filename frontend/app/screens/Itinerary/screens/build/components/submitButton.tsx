import { View, Button, StyleSheet } from 'react-native';

const SubmitButton = () => {
    return (
        <View style={styles.container}>
            <Button title='Done' onPress={() => console.log('submit dates')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    text: {
        textAlign: 'center',
    }
})

export default SubmitButton;