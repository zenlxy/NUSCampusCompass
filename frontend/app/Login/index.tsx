import { Text, TextInput, Image, View, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Login = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Username />
      <Password />
      <LoginButton />
      <GoToRegister />
    </View>
  );
}

const Logo = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 180, height: 180 }}
      />
    </View>
  )
}

const Username = () => {
  return (
    <View style={styles.username}>
      <TextInput style={styles.text} placeholder="Username" />
    </View>
  )
}

const Password = () => {
  return (
    <View style={styles.password}>
      <TextInput style={styles.text} placeholder="Password" />
    </View>
  )
}

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

const GoToRegister = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View style={styles.gotoregister}>
      <Button title="New user? Register here" onPress={() => navigation.navigate("Register")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    flex: 0,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  password: {
    flex: 0,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gotoregister: {
    flex: 0,
    paddingTop: 50,
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

export default Login;