import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Relax from './Relax';
import Home from './Home';
import Mentors from './Mentors';
const Tab = createBottomTabNavigator();
export default function TabNav() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Relax" component={Relax}/>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Mentors" component={Mentors}/>
        </Tab.Navigator>
    )
}
