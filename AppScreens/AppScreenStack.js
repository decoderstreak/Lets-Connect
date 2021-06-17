import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './welcome/Welcome'
import TabNav from './TabNav';
import Profile from '../hii/Profile';
import Cards from '../Cards/Cards'
import Cards2 from '../Card2/Card2'
import Mentors from './Mentors';
const Stack =createStackNavigator();
export default function AppScreenStack() {
    return (
       <Stack.Navigator headerMode={false}>
           <Stack.Screen name="Welcome" component={Welcome}/>
           <Stack.Screen name="Tabnav" component={TabNav}/>
           <Stack.Screen name="Profile" component={Profile}/>
           <Stack.Screen name="Cards" component={Cards}/>
           <Stack.Screen name="Cards2" component={Cards2}/>
           <Stack.Screen name="Mentors" component={Mentors}/>
       </Stack.Navigator>
    )
}
