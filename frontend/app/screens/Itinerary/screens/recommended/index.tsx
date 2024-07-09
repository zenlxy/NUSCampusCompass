import { View, Text, ListRenderItem, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import recommended from '../../../../data/Recommended';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';

const Recommended = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const itineraryList: ListRenderItem<any> = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{item.text}</Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        const iti = item;
                        navigation.navigate("Start Recommended", { iti });
                    }}>
                        <Text>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        return null;
    };
    return (
        <View>
            <FlatList data={recommended}
                renderItem={itineraryList}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#90B8B8',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 20,
    },
    button: {
        backgroundColor: '#ffe8b8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 30,
        width: 50,
        marginRight: 10,
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontFamily: 'Arial Bold',
        marginLeft: 20,
        width: 220,
    },
})

export default Recommended;