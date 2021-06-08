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

// import Check from './test/check';
import Login from './test/singin';
import Storage from './StorageDataBase/Storage'
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
      // <Login />
      <Storage/>
    )
  }
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

export default App;
