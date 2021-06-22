/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//Working with port 8087 ----- it's pretty good actually and having fun with this
import Signup from './mine/Signup';
import S from './hii/S'
// import Stack from './navigation/stack';
import Connect from './Screens/Connect';
import Track from './Sounds/Trackplayer'
// 
// import Stack from './navigation/stack'
import Logo from './Screens/Logo'
import Stack from './Relax/stack'
import Mentors from './Mentors/Mentor';
import Mentor from './Mentors/Eachmentor';
// import Mentor from './Mentors/Eachm';
import Hii from './Mentors/newM';
import { NavigationContainer } from '@react-navigation/native';
 export default function App(){
  
    return(
      // <View>
        // <S/>
      //   {/* <Signup/> */}
      // </View>
      // <Stack />
      // <Track />
      // <Stack />
      // <Connect />
      // <NavigationContainer>
      //   <Stack />
      // </NavigationContainer>
      // <Mentors />
      // <Mentor />
      <Hii/>
      // <Logo />

    )
  
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


