import { View, Text } from 'react-native';
import ExistingButton from './components/existing';
import CreateButton from './components/create';
import RecommendedButton from './components/recommended';

const Itinerary = () => {
    return (
        <View>
            <ExistingButton />
            <CreateButton />
            <RecommendedButton />
        </View>
    );
};

export default Itinerary;