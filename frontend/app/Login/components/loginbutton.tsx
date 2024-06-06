import { Button, View } from 'react-native';

const LoginButton = () => {
    return (
      <View>
        <Button title="Login" onPress={handlePress} />
      </View>
    )
}
  
const handlePress = () => {
    console.log("I'm pressed");
}

  export default LoginButton;