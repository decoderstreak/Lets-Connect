import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Player1 from './Player1';
import Player2 from './Player2';
import Player3 from './Player3';
import Relaxpage from './Relaxpage';
import Relax from './Relax';
import Track from '../Sounds/Trackplayer';
import Playerrr from '../Sounds/Track';
import { ScrollView } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator options={{headerShown:false}} >
      <Stack.Screen name="Relax" component={Relax} options={{headerShown:false}}/>
      <Stack.Screen name="Player1" component={Player1} options={{headerShown:false}} />
      <Stack.Screen name="Player2" component={Player2} options={{headerShown:false}} />
      <Stack.Screen name="Player3" component={Player3}  options={{headerShown:false}}/>
      <Stack.Screen name="Track" component={Playerrr} options={{headerShown:false}}  />

      
    </Stack.Navigator>
  );
}
export default MyStack;