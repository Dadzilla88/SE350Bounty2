import {StyleSheet} from "react-native";

const {View, FlatList, Text} = require("react-native");
const {TouchableOpacity, Image} = require("react-native-web");
const React = require("react");


export default function BreakfastMenu () {
    return(
    <View style={styles.container}>
        <FlatList
            numColumns={2}
            keyExtractor={
                item => item.id
            } data={[
            {
                name: 'Pancakes',
                id: '1',
                cost: '$9.99',
                description: 'Fluffy buttermilk flapjacks',
                image: require('./assets/Pancakes.jpg')
            },
            {
                name: 'Waffles',
                id: '2',
                cost: '$9.99',
                description: 'Because for some reason you were not happy with pancakes',
                image: require('./assets/Waffle.jpeg')
            },
            {
                name: 'Biscuits and Gravy',
                id: '3',
                cost: '$14.99',
                description: 'A southern treat',
                image: require('./assets/Biscuits and Gravy.jpg')
            },
            {
                name: 'Steak and Eggs',
                id: '4',
                cost: '$21.99',
                description: 'Never a bad time to have steak',
                image: require('./assets/Steak and Eggs.jpeg')
            },
            {
                name: 'Cereal',
                id: '5',
                cost: '$2.99',
                description: 'Why did you even come here?',
                image: require('./assets/Cereal.jpeg')
            },
            {
                name: 'Fruit',
                id: '6',
                cost: '$4.99',
                description: 'Not very filling, but at least it is healthy!',
                image: require('./assets/Fruit.jpg')
            }
        ]} renderItem={({item}) => (
            <TouchableOpacity style={styles.breakfastMenuItem} onPress={()=> pressHandler(item)}>
                <Text style={styles.text}>{item.name}</Text>
                <Image
                    style={styles.tinyLogo}
                    source={item.image}
                />
            </TouchableOpacity>
        )}
        />
    </View>
);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDC8B1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    movieListItem: {
        width: 900,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        backgroundColor: '#EE7621',
        resizeMode: 'cover'
    },
    tinyLogo: {
        width: '90%',
        height: 300,
        resizeMode: 'contain'
    },
    musicMenuItem: {
        width: 900,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        backgroundColor: '#8B7355',
        resizeMode: 'cover'
    },
    text: {
        flex: 1,
        fontSize: 24,
        color: 'white',
    },
    breakfastMenuItem: {
        width: 900,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        backgroundColor: '#EE7621',
        resizeMode: 'cover'
    },
    dinnerMenuItems: {
        width: 900,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        backgroundColor: '#8B7355',
        resizeMode: 'cover'
    },
});
