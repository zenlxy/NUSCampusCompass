import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLanguage } from '@/app/contexts/LanguageContext';
import i18n from '@/i18n';

const CreateButton = () => {
    useLanguage();
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Build Your Own")} style={styles.button}>
                <Text style={styles.text}>{i18n.t('buildYourOwn')}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#90B8B8',
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 15,
    },
    text: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Rubik'
    },
})

export default CreateButton;