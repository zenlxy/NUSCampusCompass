import { View, StyleSheet, ScrollView } from 'react-native';
import AddDatesButton from './components/addDates';

const Build = () => {
    return (
        <ScrollView style={styles.bigcontainer}>
            <AddDatesButton />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bigcontainer: {
        marginBottom: 93,
    }
})

export default Build;