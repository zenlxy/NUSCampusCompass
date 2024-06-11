import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Logo from './components/logo';
import GoToRegister from './components/gotoregister';
import { useAuth } from '../contexts/AuthContext';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log('Logged in successfully');
      navigation.navigate("Home");
    } catch (error) {
      alert((error as Error).message);
    }
  }
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.textContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.text}
          placeholder="Email"
          value={email}
          onChangeText={setEmail} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.text}
          placeholder="Password"
          value={password}
          onChangeText={setPassword} />
      </View>
      <Button title="Login" onPress={handleLogin} />
      <GoToRegister />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 2,
    marginLeft: 5,
  },
  textContainer: {
    flex: 0,
    paddingTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
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