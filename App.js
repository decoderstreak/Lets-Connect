 import React from 'react';

 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   LogBox 
 } from 'react-native';
 
import { MenuProvider } from 'react-native-popup-menu';
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import AuthScreens  from './Authentications/AuthScreens';
import UploadingImages from './DoubtsSection/UploadingImages';
import DiscussTab from './DoubtsSection/DiscussTab'
 LogBox.ignoreAllLogs();

// console.disableYellowBox = true;


  export default function App(){
     return(
      <DiscussTab/>
      //  <AuthScreens/>
      // <MenuProvider>
      // {/* <UploadingImages/> */}
      // </MenuProvider>
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
 
 
 
