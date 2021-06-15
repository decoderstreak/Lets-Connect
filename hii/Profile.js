import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Touchable,
  TextInput,
  Image,
} from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    
   
  } from 'react-native-svg';
  import p from '../assets/p.png'

export default function Profile() {
    return (
      <View >
              
                  <ScrollView>
            <View style={{margin:20}}>
                  <View style={{paddingLeft:120}}>  
                  <Image source={require('../assets/p.png')}  style={{
                            height: 120,
                            width: 120,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>  
          
  
  </View>
  <View style={{alignItems:'center',marginTop:10}}>
<Text style={{fontSize:14,color:'#116FAF'}}>Change Profile Picture </Text>
  </View>
  <View style={{paddingTop:60}}>
  
  <Text style={styles.text1}>Name</Text>
  <TextInput placeholder="Enter your full name" style={styles.textinput}></TextInput>
  <Text style={styles.text1}>Email Address</Text>
  <TextInput placeholder="Enter your Email Address"  style={styles.textinput}></TextInput>
  <Text style={styles.text1}>Academic Year</Text>
  <TextInput placeholder="Academic Year"  style={styles.textinput}></TextInput>
 

  </View>
  </View>
  </ScrollView>
  <View style={styles.footer}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Save Changes</Text></TouchableOpacity>
         
          </View>
  
  </View>
  
 
          );
      };
      const styles= StyleSheet.create({
        header:{
          height:56,
          width:'100%',
          backgroundColor:'#F5F8FA',
          justifyContent:'center'
          

        } ,
       
        text:{
              fontFamily:"Roboto",
              fontSize:14,
              marginVertical:15,
             
          },
          text1:{
              fontFamily:"Roboto",
              fontSize:14,
              marginVertical:10,
              fontWeight:"bold",
              paddingLeft:5
              
          
             
          },
  
         
          
          container: {
          
              justifyContent: 'center',
              backgroundColor: '#F5FCFF',
            },
          textinput:{
              height:50,
              borderWidth:1,
              borderRadius:4,
              borderColor:"#E1E8ED",
              backgroundColor: "#F5F8FA",
          },
          button:{
            backgroundColor:'#116FAF',
            padding:10,
            borderRadius: 4,
            width:364,
            height:47,
            borderRadius:38, 
          
          },
          buttonText:{
            color:'white',
            alignSelf:'center',
            fontSize:14,
            fontFamily:"Roboto",
            fontWeight: "bold",
            paddingTop:5
            
          },
          footer: {
            backgroundColor:'#FFFFFF',
            height:56,
            alignItems:'center',
            justifyContent:'center',
            marginTop:245,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 4 },
           
            shadowOpacity: 0.2,
              elevation: 3,
            
          },
         
          footerText: {
            color:'white',
            fontWeight:'bold',
            alignItems:'center',
            fontSize:18,
            
          },
           
           
          });