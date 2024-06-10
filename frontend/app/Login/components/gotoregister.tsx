import { Button, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const GoToRegister = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
      <View style={styles.gotoregister}>
        <Button title="New user? Register here" onPress={() => navigation.navigate("Register")} />
      </View>
    )
  }
  
const styles = StyleSheet.create({
  gotoregister: {
    flex: 0,
    paddingTop: 50,
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
  
export default GoToRegister;