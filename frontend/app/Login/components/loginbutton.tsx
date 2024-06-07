import { Button, View } from 'react-native';

type LoginButtonProps = {
  onPress: () => void; // Define onPress as a function that returns void for type checking
};

const LoginButton: React.FC<LoginButtonProps> = ({ onPress }) => {
  return (
    <View>
      <Button title="Login" onPress={onPress} />
    </View>
  )
}

export default LoginButton;