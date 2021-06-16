import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Player1 from './Player1';
import Player2 from './Player2';
import Player3 from './Player3';
import Relaxpage from './Relaxpage';
import { ScrollView } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Relaxpage" component={Relaxpage} />
      <Stack.Screen name="Player1" component={Player1} />
      <Stack.Screen name="Player2" component={Player2} />
      <Stack.Screen name="Player3" component={Player3} />

      
    </Stack.Navigator>
  );
}
export default MyStack;