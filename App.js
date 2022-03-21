import { StatusBar} from "expo-status-bar";
import * as React from 'react';
import {StyleSheet, Text, View, useWindowDimensions, FlatList} from "react-native";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {Image, TouchableOpacity} from "react-native-web";
import food from "./food";
import entertainment from "./entertainment";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { NavigationContainer } from '@react-navigation/native';

const pressHandler = (item) => {
    alert(item.name + "\n\n" + item.description + "  " + item.cost)
}
const Tab = createMaterialTopTabNavigator();

export default function DateNight() {
    return(
        <NavigationContainer>
            <Tab.Navigator style={styles.tabItems}>
                <Tab.Screen name="Food" component={food} />
                <Tab.Screen name="Entertainment" component={entertainment}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
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
