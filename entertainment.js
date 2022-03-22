import * as React from "react";
import movies from "./movies";
import music from "./music";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function EntertainmentMenu () {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#e91e63",
            tabBarLabelStyle: {fontSize: 24, color: 'black'},
            tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
            <Tab.Screen name="Movies" component={movies}/>
            <Tab.Screen name="Music" component={music}/>
        </Tab.Navigator>
    )
};
