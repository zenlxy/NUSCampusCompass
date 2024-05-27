import classNames from "classnames";
import { Text, TextInput, Image, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View style={styles.miniContainer}>
        <TextInput style={styles.text} placeholder="Username" />
      </View>
      <View style={styles.miniContainer}>
        <TextInput style={styles.text} placeholder="Password" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
  miniContainer: {
    flex: 1,
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
    borderRadius: 15,
    paddingLeft: 15,
    padding: 2,
    paddingRight: 60,
  }
})