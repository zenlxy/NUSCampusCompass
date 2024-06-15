import { View, Text } from 'react-native';
import Title from './components/title';
import AddDatesButton from './components/addDates';
import SubmitButton from './components/submitButton';

const Build = () => {
    return (
        <View>
            <Title />
            <AddDatesButton />
            <SubmitButton />
        </View>
    );
};

export default Build;