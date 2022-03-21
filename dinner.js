import {StyleSheet} from "react-native";

const {View, FlatList, Text} = require("react-native");
const {TouchableOpacity, Image} = require("react-native-web");
const React = require("react");


export default function DinnerMenu () {
    return(
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={
                    item => item.id
                }
                data={
                    [
                        {
                            name: 'Roast',
                            id: '1',
                            cost: '$12.99',
                            description: 'A traditional roast dinner',
                            image: require('./assets/roast.jpeg')
                        },
                        {
                            name: 'Braised Chicken Breast',
                            id: '2',
                            cost: '$17.99',
                            description: 'Winner Winner Braised Chicken Breast Dinner',
                            image: require('./assets/braised chicken.jpg')
                        },
                        {
                            name: 'Hot Dog',
                            id: '3',
                            cost: '$7.99',
                            description: 'Nothing fancy here, just a good ol dog',
                            image: require('./assets/hot dog.jpg')
                        },
                        {
                            name: 'Cheeseburger',
                            id: '4',
                            cost: '$13.99',
                            description: 'The 80% ground beef mixed with pork',
                            image: require('./assets/cheeseburger.jpg')
                        },
                        {
                            name: 'Thai Fried Rice',
                            id: '5',
                            cost: '$16.99',
                            description: 'Not authentic, but it will do the trick!',
                            image: require('./assets/thai fried rice.jpg')
                        },
                        {
                            name: 'Enchiladas',
                            id: '6',
                            cost: '$18.99',
                            description: 'Lotta cheese and tortilla',
                            image: require('./assets/enchiladas.jpg')
                        }
                    ]
                } renderItem={({item}) =>(
                <TouchableOpacity style={styles.dinnerMenuItems} onPress={()=> pressHandler(item)}>
                    <Text style={styles.text}> {item.name}</Text>
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
