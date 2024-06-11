import { Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const LoginButton = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={styles.loginbutton}>
      <Button title="Login" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const styles = StyleSheet.create({
  loginbutton: {
    flex: 0,
  },
  text: {
    fontSize: 20,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingLeft: 15,
    padding: 2,
    paddingRight: 60,
  }
})

export default LoginButton;