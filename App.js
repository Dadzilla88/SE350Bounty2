import { StatusBar} from "expo-status-bar";
import * as React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, FlatList} from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {Image, TouchableOpacity} from "react-native-web";


const pressHandler = (item) => {
    alert(item.name + "\n\n" + item.description + "  " + item.cost)
}
const MusicMenu = () => (
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
const FoodMenu = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'Breakfast'},
        {key: 'second', title: 'Dinner'},
    ])

    const renderScene = SceneMap({
        first: BreakfastMenu,
        second: DinnerMenu,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'white'}
            inactiveColor={'black'}
            renderLabel = {({route}) =>(
                <Text style={{fontSize: 32}}>
                    {route.title}
                </Text>)}
            style={{marginTop: 0, backgroundColor: '#CB4C4E', height: 60}}
        />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
        />
    );
};

const BreakfastMenu = () => (
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
const DinnerMenu = () => (
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
const MovieMenu = () => (
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
            <TouchableOpacity style={styles.movieListItem} onPress={()=> pressHandler(item)}>
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

const EntertainmentMenu = () => {

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'Movies'},
        {key: 'second', title: 'Music'},
    ])

    const renderScene = SceneMap({
        first: MovieMenu,
        second: MusicMenu,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'white'}
            inactiveColor={'black'}
            renderLabel = {({route}) =>(
                <Text style={{fontSize: 32}}>
                    {route.title}
                </Text>)}
            style={{marginTop: 0, backgroundColor: '#205C37', height: 60}}
        />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
        />
    );
};

export default function DateNight() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'Food'},
        {key: 'second', title: 'Entertainment'},
    ])

    const renderScene = SceneMap({
        first: FoodMenu,
        second: EntertainmentMenu,
    });

    const renderTabBar = props => (
        <TabBar
            {...props}
            activeColor={'white'}
            inactiveColor={'black'}
            renderLabel = {({route}) =>(
                <Text style={{fontSize: 32}}>
                    {route.title}
                </Text>)}
            style={{marginTop: 0, backgroundColor: 'darkgrey', height: 60}}
        />
    );

    return (
        <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
        />
    );
}

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
