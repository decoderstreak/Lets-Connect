import React,{useState} from 'react';
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
  Dimensions
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
import p from '../assets/Avatar.png'
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import { set } from 'react-native-reanimated';
import Cross from '../assets/cross';
const width=Dimensions.get('screen').width
const height =Dimensions.get('screen').height
export default function Profile({navigation}) {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [NewName, setNewName] = useState('')
  const [NewEmail, setNewEmail] = useState('')
  const [NewYear, setNewYear] = useState('')
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setName(auth().currentUser.displayName)
      setEmail(auth().currentUser.email)
      // User logged in already or has just logged in.
      // console.log(firebase.auth().currentUser);
    } else {
      // User not logged in or has just logged out.
    }
  });
 async function Update(){
  update = {
    displayName: NewName,
    email:NewEmail
  }
  // console.log('updated info',update);
    await auth().currentUser.updateProfile(update);
    // await firebase.auth().currentUser.updateProfile(NewEmail);
    // await firebase.auth().currentUser.updateProfile(NewYear);
  }
    return (
      <View >
        <View style={{flexDirection:'row',margin:'5%'}}>
        <TouchableOpacity   onPress={() => navigation.goBack()}>
         <Cross />
        </TouchableOpacity>
        <View style={{margin:'2.8%'}}>
          <Text 
          style={{fontSize:20,fontWeight:'bold'}}
          // style={{fontSize:'20',fontWeight:'bold'}}
          >Edit Profile</Text>
        </View>
        </View>
        
        <ScrollView style={{height:'95%'}}>
            <View 
            // style={{margin:20}}
            >
                  <View style={{alignItems:'center',justifyContent:'center'}}>  
                  <Image source={p}  style={{
                            height: 120,
                            width: 120,
                            backgroundColor: "#ddd",
                            borderRadius: 50}}
                            resizeMode="cover"/>  
  </View>
<View style={{alignItems:'center',marginTop:10,justifyContent:'center'}}>
<Text style={{fontSize:14,color:'#116FAF'}}>Change Profile Picture </Text>
</View>
<View 
style={{margin:'5%',marginBottom:'3%'}}
>
<Text style={styles.text1}>Name</Text>
<TextInput placeholder={Name} style={styles.textinput} onChangeText={(value)=>setNewName(value)}></TextInput>
  <Text style={styles.text1}>Email Address</Text>
  <TextInput placeholder={Email}  style={styles.textinput} onChangeText={(value)=>setNewEmail(value)}></TextInput>
  <Text style={styles.text1}>Academic Year</Text>
  <TextInput placeholder="2020"  style={styles.textinput}  onChangeText={(value)=>setNewYear(value)}></TextInput>
  </View>
  </View>
  
  <View 
  style={{justifyContent:'center',alignItems:'center',marginTop:'10%'}}
  // style={styles.button}
  >
        <TouchableOpacity style={styles.button} onPress={()=>{Update() && navigation.goBack()
// console.log('newname',NewName),
// console.log('newemail',NewEmail),
// console.log('newYear',NewYear)
        }}><Text style={styles.buttonText}>Save Changes</Text></TouchableOpacity>
  </View>
  </ScrollView>
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
            // marginTop:20,
            // shadowColor: "black",
            // shadowOffset: { width: 0, height: 4 },
            // shadowOpacity: 0.2,
            // elevation: 3,
          },
          footerText: {
            // color:'white',
            fontWeight:'bold',
            alignItems:'center',
            // fontSize:18,
          }, 
          button:{
            backgroundColor:'#116FAF',
            width:width/(1.135),
            height:height/(14),
            borderRadius:30,
            justifyContent:'center',
            alignItems:'center'
        },
          });