import classNames from "classnames";
import { Text, TextInput, Image, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Logo />
      <Username />
      <Password />
    </View>
  );
}

const Logo = () => {
  return (
    <View>
      <Image
        source={require('../assets/images/logo.png')}
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
  text: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    paddingLeft: 15,
    padding: 2,
    paddingRight: 60,
  }
})