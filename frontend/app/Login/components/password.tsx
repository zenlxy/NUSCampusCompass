import { View, Text, TextInput, StyleSheet } from 'react-native';

const Password = () => {
  return (
    <View style={styles.password}>
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.text} placeholder="Password" />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    marginBottom: 2,
    marginLeft: 5,
  },
  password: {
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

export default Password;