import { View, Text, Button, StyleSheet } from 'react-native';
import LogoutButton from './components/logoutButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import i18n from '../../../i18n'
import { useLanguage } from '../../contexts/LanguageContext';


const Settings = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    useLanguage();
    return (
      <View style={styles.container}>
        <Button title={i18n.t('languagePreference')} onPress={() => navigation.navigate("Language Preference Stack")} />
        <Button title={i18n.t('feedbackAndRating')}/>
        <LogoutButton />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Settings;