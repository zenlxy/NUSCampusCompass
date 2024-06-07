import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterButtonProps = {
    onPress: () => void; // Define onPress as a function that returns void for type checking
};

const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress }) => {
    return (
        <View>
            <Button title="Register" onPress={onPress} />
        </View>
    )
}

export default RegisterButton;