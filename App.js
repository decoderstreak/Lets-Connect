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
 import Home from '../Lets-Connect/Home/Home.js';
 import Cards from '../Lets-Connect/Card2/Card2.js';
 import ScrollingTest from './Scrolling/ScrollingTest';
 import Mentors from './Mentors/Mentor';
 import Mentor from './Mentors/Eachmentor';
 import FireStore from './StorageDataBase/FireStore';
 import GettingCourses from './StorageDataBase/GettingCourses';
 import TestingThree from './StorageDataBase/TestingThree';
import TestingFour from './StorageDataBase/TestingFour';
import CourseSlider from './AppScreens/Slider/CourseSlider'
import TestButtons from './StorageDataBase/TestButtons';
  export default function App(){
     return(
      //  <Cards/>
      //  <CourseSlider/>
      //  <TestingFour/>
      //  <GettingCourses/>
      //  <TestingThree/>
       <AuthScreens/>
      // <TestButtons/>
      // <ScrollingTest/>
      // <FireStore/>
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
 
 
 
