import * as React from "react";
import breakfast from "./breakfast";
import dinner from "./dinner";
import { createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();
export default function FoodMenu () {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#e91e63",
            tabBarLabelStyle: {fontSize: 24, color: 'black'},
            tabBarStyle: {backgroundColor: '#F47174'},
        }}>
            <Tab.Screen name="Breakfast" component={breakfast} />
            <Tab.Screen name="Dinner" component={dinner}/>
        </Tab.Navigator>
    )
};
