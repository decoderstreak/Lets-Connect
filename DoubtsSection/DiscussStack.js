import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import DiscussTech from './DiscussTech';
import AnswersTech from './AnswersTech';
import DiscussTab from './DiscussTab';
const Stack = createStackNavigator();
export default function DiscussStack() {
    return (
        // <View></View>
       <Stack.Navigator headerMode="none">
           <Stack.Screen name="DiscussTab" component={DiscussTech}/>
           <Stack.Screen name="AnswersTech" component={AnswersTech}/>
       </Stack.Navigator>
    )
}
