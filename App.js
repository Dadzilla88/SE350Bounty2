import * as React from 'react';
import food from "./food";
import entertainment from "./entertainment";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function DateNight() {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "#e91e63",
                tabBarLabelStyle: {fontSize: 24, color: 'black'},
                tabBarStyle: {backgroundColor: 'darkgrey'},
            }}>
                <Tab.Screen name="Food" component={food} />
                <Tab.Screen name="Entertainment" component={entertainment}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
};
