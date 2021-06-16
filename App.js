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
 import Signup from './mine/Signup';
 import S from './hii/S'
 import Storage from './StorageDataBase/Storage';
 import Stack from './navigation/stack'
 import AuthScreens  from './Authentications/AuthScreens';
 import Welcome from './AppScreens/Welcome';
 import Connect from './Screens/Connect';
 import Sadhana from './AppScreens/sadhana/Sadhana'
 import Track from './Sounds/Trackplayer'
 import Profile from './hii/Profile';
 import GettingFiles from './StorageDataBase/GettingFiles';
 import Logo from './Screens/Logo'
 import Card2 from '../Lets-Connect/Card2/Card2.js'
//  import Cards from './Cards/Cards.js'
 import Cards from '../Lets-Connect/Card2/Card2.js';
//  import Pages from './linear/Pages.js'
  export default function App(){
   
     return(
       
      <Cards/>
      //  <GettingFiles/>
      //  <AuthScreens/>
      // <Sadhana/>
      // <Connect/>
      // <Track/>
      // <Profile/>
      // <Logo/>
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
 
 
 
