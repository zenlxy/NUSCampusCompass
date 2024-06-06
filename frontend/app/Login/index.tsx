import { View, StyleSheet } from "react-native";
import Logo from './components/logo';
import Username from './components/username';
import Password from './components/password';
import LoginButton from './components/loginbutton';
import GoToRegister from './components/gotoregister';

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Login;