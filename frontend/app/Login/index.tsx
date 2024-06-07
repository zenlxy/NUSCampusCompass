import { View, StyleSheet, Alert } from "react-native";
import React, { useState } from 'react';
import Logo from './components/logo';
import Username from './components/username';
import Password from './components/password';
import LoginButton from './components/loginbutton';
import GoToRegister from './components/gotoregister';

const Login = () => {
  // State hooks for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = async () => {
    try {
      // Make API request to login endpoint
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, show success message
        Alert.alert("Success", "Login successful");
        // Optionally, you can navigate to another screen upon successful login
      } else {
        // If login fails, show error message from backend
        Alert.alert("Error", data.message || "Login failed");
      }
    } catch (error) {
      // If there's a network error or other issues, show generic error message
      Alert.alert("Error", "Failed to connect to the server");
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Username />
      <Password />
      <LoginButton onPress={handleLogin} />
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