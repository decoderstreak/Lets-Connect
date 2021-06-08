/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

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
// import Welcome from '../Lets-Connect/Welcome/Welcome'
// class App extends React.Component{
//   render(){
//     return(
//       <View>
//         <Welcome></Welcome>
//       </View>

// import Check from './test/check';
// import Login from './test/singin';

class App extends React.Component{
  render(){
    return(
      // <View>
      //   {/*............... Runs at port 8086 ...................*/}
      //   <Text>Welcome to Let's Connect</Text>
      //   <Text>Yahooooooooooooooooooooooooooooo</Text>
      //   <Text>Hii Uman</Text>
      // </View>
      // <Check />
      <Login />
    )
  }
}


export default App;
