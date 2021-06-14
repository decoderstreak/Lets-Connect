import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
// import Welcome from './Welcome';
import Welcome from './welcome/Welcome'
import TabNav from './TabNav';
const Stack =createStackNavigator();
export default function AppScreenStack() {
    return (
       <Stack.Navigator headerMode={false}>
           <Stack.Screen name="Welcome" component={Welcome}/>
           <Stack.Screen name="Tabnav" component={TabNav}/>
       </Stack.Navigator>
    )
}
