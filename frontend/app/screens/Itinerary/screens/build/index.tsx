import { View, StyleSheet, ScrollView } from 'react-native';
import Title from './components/title';
import AddDatesButton from './components/addDates';
import SubmitButton from './components/submitButton';
import BackButton from './components/backButton';

const Build = () => {
    return (
        <View style={styles.bigcontainer}>
            <View style={styles.container}>
                <BackButton />
                <Title />
            </View>
            <AddDatesButton />
            <SubmitButton />
        </View>
    );
};

const styles = StyleSheet.create({
    bigcontainer: {
        marginBottom: 90,
    },
    container: {
        flexDirection: "row",
    }
})

export default Build;