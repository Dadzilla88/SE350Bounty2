import {StyleSheet} from "react-native";

const {View, FlatList, Text} = require("react-native");
const {TouchableOpacity, Image} = require("react-native-web");
const React = require("react");


export default function MusicMenu () {
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
                        name: 'Grandson',
                        id: '1',
                        cost: '$12.99',
                        description: 'Kiss Bang',
                        image: require('./assets/grandson kiss bang.jpg')
                    },
                    {
                        name: 'K Flay',
                        id: '2',
                        cost: '$17.99',
                        description: 'Blood in the Cut',
                        image: require('./assets/k flay blood in the cut.jpg')
                    },
                    {
                        name: 'Spiritbox',
                        id: '3',
                        cost: '$7.99',
                        description: 'Circle With Me',
                        image: require('./assets/spiritbox circle with me.png')
                    },
                    {
                        name: 'Otep',
                        id: '4',
                        cost: '$13.99',
                        description: 'March of the Martyrs',
                        image: require('./assets/otep march of the martyrs.jpg')
                    },
                    {
                        name: 'Duncan Laurence',
                        id: '5',
                        cost: '$16.99',
                        description: 'Arcade',
                        image: require('./assets/arcade duncan laurence.jpg')
                    },
                    {
                        name: 'Noah Cyrus',
                        id: '6',
                        cost: '$18.99',
                        description: 'Stay Together',
                        image: require('./assets/stay together noah cyrus.png')
                    }
                ]
            } renderItem={({item}) =>(
            <TouchableOpacity style={styles.musicMenuItem} onPress={()=> pressHandler(item)}>
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
