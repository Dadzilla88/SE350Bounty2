import {StyleSheet} from "react-native";
const {View, FlatList, Text} = require("react-native");
const {TouchableOpacity, Image} = require("react-native-web");
const React = require("react");

const pressHandler = (item) => {
    alert(item.name + "\n\n" + item.description + "  " + item.cost)
}

export default function MovieMenu () {
    return(
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                keyExtractor={
                    item => item.id
                } data={[
                {
                    name: 'Bridesmaids',
                    id: '1',
                    cost: '$9.99',
                    description: 'Comedy',
                    image: require('./assets/Brides maids.jpg')
                },
                {
                    name: 'Star Wars Episode 7',
                    id: '2',
                    cost: '$9.99',
                    description: 'Sci Fi',
                    image: require('./assets/Star Wars Episode 7.jpg')
                },
                {
                    name: 'Wonder Woman',
                    id: '3',
                    cost: '$14.99',
                    description: 'Fantasy Action',
                    image: require('./assets/Wonder Woman.jpg')
                },
                {
                    name: 'Death on the Nile',
                    id: '4',
                    cost: '$21.99',
                    description: 'Murder Mystery',
                    image: require('./assets/Death on the Nile.jpg')
                },
                {
                    name: 'Knives Out',
                    id: '5',
                    cost: '$2.99',
                    description: 'Murder Mystery',
                    image: require('./assets/Knives out.jpg')
                },
                {
                    name: 'Masterminds',
                    id: '6',
                    cost: '$4.99',
                    description: 'Comedy',
                    image: require('./assets/Masterminds.jpg')
                }
            ]} renderItem={({item}) => (
                <TouchableOpacity style={styles.movieListItem} onPress={() => pressHandler(item)}>
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
    text: {
        flex: 1,
        fontSize: 24,
        color: 'white',
    },
});
