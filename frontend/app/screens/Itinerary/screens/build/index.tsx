import { View, StyleSheet } from 'react-native';
import Title from './components/title';
import AddDatesButton from './components/addDates';
import SubmitButton from './components/submitButton';
import BackButton from './components/backButton';

const Build = () => {
    return (
        <View>
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
    container: {
        flexDirection: "row",
    }
})

export default Build;