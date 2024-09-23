import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLanguage } from '../../../../contexts/LanguageContext';
import i18n from '../../../../../i18n'; 

const LanguagePreference = () => {
    const { changeLanguage } = useLanguage();
    const handleLanguageChange = (lang: string) => {
        changeLanguage(lang);
};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.t('selectLanguage')}</Text>
      <Button title={i18n.t('english')} onPress={() => handleLanguageChange('en')} />
      <Button title={i18n.t('spanish')} onPress={() => handleLanguageChange('es')} />
      <Button title={i18n.t('french')} onPress={() => handleLanguageChange('fr')} />
      <Button title={i18n.t('chinese')} onPress={() => handleLanguageChange('zh')} />
      <Button title={i18n.t('korean')} onPress={() => handleLanguageChange('kr')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
},
});

export default LanguagePreference;

