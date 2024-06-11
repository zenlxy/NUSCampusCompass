import { View, StyleSheet } from "react-native";
import Logo from './components/logo';
import Email from './components/email';
import Password from './components/password';
import LoginButton from './components/loginbutton';
import GoToRegister from './components/gotoregister';

const Login = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Email />
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