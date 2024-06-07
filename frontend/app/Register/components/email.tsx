import { View, Text, TextInput, StyleSheet } from 'react-native';

const Email = () => {
    return (
        <View style={styles.email}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.text} placeholder="Email" />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        alignSelf: 'flex-start',
        marginBottom: 2,
        marginLeft: 5,
    },
    email: {
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

export default Email;