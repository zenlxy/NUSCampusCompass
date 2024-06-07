import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const RegisterButton = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View>
            <Button title="Register" onPress={() => navigation.navigate("Login")} />
        </View>
    )
}

export default RegisterButton;