import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from '@expo/vector-icons/FontAwesome6';

const BackButton = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                <Icon name="arrow-left" size={20} color="#047bff" />
            </ TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingTop: 10,
    }
})

export default BackButton;