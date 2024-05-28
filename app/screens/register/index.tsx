import classNames from "classnames";
import { Text, TextInput, Image, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Email />
      <Username />
      <Password />
      <ConfirmPassword />
    </View>
  );
}

const Email = () => {
  return (
      <View style={styles.username}>
        <TextInput style={styles.text} placeholder="Email" />
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

const ConfirmPassword = () => {
    return (
      <View style={styles.confirmpassword}>
        <TextInput style={styles.text} placeholder="Confirm Password" />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  email: {
    flex: 0,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
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
  confirmpassword: {
    flex: 0,
    paddingTop: 25,
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