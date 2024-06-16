import { View, StyleSheet, ScrollView } from 'react-native';
import Title from './components/title';
import AddDatesButton from './components/addDates';
import SubmitButton from './components/submitButton';
import BackButton from './components/backButton';

const Build = () => {
    return (
        <ScrollView style={styles.scrollcontainer}>
            <View style={styles.container}>
                <BackButton />
                <Title />
            </View>
            <AddDatesButton />
            <SubmitButton />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollcontainer: {
        marginBottom: 90,
    },
    container: {
        flexDirection: "row",
    }
})

export default Build;