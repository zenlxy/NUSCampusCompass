import { View, Text, TextInput, StyleSheet } from 'react-native';

const ConfirmPassword = () => {
    return (
        <View style={styles.confirmpassword}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.text} placeholder="Confirm Password" />
        </View>
    )
}


const styles = StyleSheet.create({
    label: {
        alignSelf: 'flex-start',
        marginBottom: 2,
        marginLeft: 5,
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

export default ConfirmPassword;