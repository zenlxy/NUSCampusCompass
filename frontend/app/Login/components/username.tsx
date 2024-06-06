import { View, TextInput, StyleSheet } from 'react-native';

const Username = () => {
    return (
      <View style={styles.username}>
        <TextInput style={styles.text} placeholder="Username" />
      </View>
    )
  }

  const styles = StyleSheet.create({
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