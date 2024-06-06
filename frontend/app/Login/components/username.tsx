import { View, Text, TextInput, StyleSheet } from 'react-native';

const Username = () => {
  return (
    <View style={styles.username}>
      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.text} placeholder="Username" />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    marginBottom: 2,
    marginLeft: 5,
  },
  username: {
    flex: 0,
    paddingTop: 25,
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
});

export default Username;