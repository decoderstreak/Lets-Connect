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
    Mask,} from 'react-native-svg';
    import auth from '@react-native-firebase/auth';
export default function Signup() {    
  const [Password, setPassword] = useState('')
  const [email, setemail] = useState('')
    function signin(){
        auth().signInWithEmailAndPassword(email,Password)
        .then(()=>{
            console.log("succesfuuly signedin");
        })
    }
    return (
        <View style={{margin:20}}>
           <Text style={styles.text}>Welcome Back!</Text>
{/* ------------------------------------------------facebook login button----------------------------- */}
            <TouchableOpacity 
            style={styles.button1}>
                      <Svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <Path d="M10.6776 4.92937H12.8745V1.10305C12.4955 1.05091 11.192 0.933594 9.67389 0.933594C6.50635 0.933594 4.33649 2.92597 4.33649 6.58785V9.95794H0.841064V14.2355H4.33649V24.9985H8.62206V14.2365H11.9761L12.5085 9.95894H8.62105V7.01199C8.62206 5.77566 8.95495 4.92937 10.6776 4.92937Z" fill="white"/>
                      </Svg>
                     <Text style={{fontSize:14,fontFamily:"Roboto",color:"white"}} >CONTINUE WITH FACEBOOK</Text>
            </TouchableOpacity>
{/* ------------------------------------------------Google login button--------------------------------- */}
            <TouchableOpacity 
            style={styles.button2}>
                    <View style={{flexDirection:"row",justifyContent:'space-evenly'}}>
                    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M23.6496 12.7673C23.6496 11.778 23.5693 11.056 23.3956 10.3074H12.0984V14.7727H18.7296C18.596 15.8824 17.874 17.5536 16.2697 18.6765L16.2472 18.826L19.8191 21.5932L20.0666 21.6179C22.3394 19.5189 23.6496 16.4305 23.6496 12.7673Z" fill="#4285F4"/>
                    <Path d="M12.0984 24.5324C15.3471 24.5324 18.0745 23.4628 20.0666 21.6178L16.2696 18.6765C15.2536 19.3851 13.8899 19.8798 12.0984 19.8798C8.91653 19.8798 6.21593 17.7808 5.25324 14.8797L5.11213 14.8917L1.39797 17.7661L1.3494 17.9011C3.32805 21.8317 7.39235 24.5324 12.0984 24.5324Z" fill="#34A853"/>
                    <Path d="M5.25326 14.8797C4.99924 14.131 4.85223 13.3288 4.85223 12.4999C4.85223 11.671 4.99924 10.8688 5.23989 10.1202L5.23316 9.9607L1.47245 7.0401L1.34941 7.09863C0.533913 8.72971 0.065979 10.5614 0.065979 12.4999C0.065979 14.4385 0.533913 16.27 1.34941 17.9011L5.25326 14.8797Z" fill="#FBBC05"/>
                    <Path d="M12.0988 5.12005C14.3582 5.12005 15.8823 6.09601 16.7513 6.9116L20.1471 3.59597C18.0616 1.65741 15.3475 0.467529 12.0988 0.467529C7.39272 0.467529 3.32841 3.16813 1.34976 7.0987L5.24024 10.1202C6.2163 7.21907 8.91689 5.12005 12.0988 5.12005Z" fill="#EB4335"/>
                    </Svg>
                    <Text>CONTINUE WITH GOOGLE</Text>
            </View>
    {/* --------------------------------------------with mail and password------------------------------ */}
            </TouchableOpacity>
            <Text style={{alignSelf:'center',marginBottom: 40,}}>or log in with email</Text>
            <TextInput placeholder="email" style={styles.textinput} onChangeText={(value)=>setemail(value)}></TextInput>
            <TextInput placeholder="password"  secureTextEntry={true} style={styles.textinput} onChangeText={(value)=>setPassword(value) }></TextInput>
            <TouchableOpacity 
            style={styles.button3}
            onPress={()=>signin()}>
 <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Log in</Text>
            </TouchableOpacity>
 <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:14,marginBottom:120}}>Forgot password?</Text>
           <View style={{flexDirection:'row',justifyContent:'center',}}>
            <Text style={{fontSize:14}}>ALREADY HAVE AN ACCOUNT?</Text>
            <TouchableOpacity><Text style={{color:'blue'}}> Sign up</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    text:{
       alignSelf:'center',
       fontSize:28,
       fontFamily:'Roboto',
       fontWeight:'bold',
       lineHeight:37.8,
       marginTop:70,
       marginBottom:40    
    },
    button1:{
        height:50,
        backgroundColor: "#116FAF",
        borderRadius: 38,
        // flexDirection:'column',
         paddingVertical: 12,
          paddingHorizontal: 12,
        flexDirection: 'row',
     justifyContent: 'center',
    justifyContent:"space-evenly",
    paddingLeft:10,
    marginBottom: 20,
   },
    button2:{
        height:50,
        backgroundColor: "#EFF4FF",
        borderRadius: 38,
        // alignItems:'center',
        paddingVertical: 12,
         paddingHorizontal: 12,
         marginBottom: 40,
        //  justifyContent: 'center',
         justifyContent:'space-evenly',
    },
    button3:{
        height:50,
        backgroundColor: "#7583CA",
        borderRadius: 38,
        flexDirection:'column',
         paddingVertical: 12,
          paddingHorizontal: 12,
        flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
 textinput:{
       backgroundColor:'#F2F3F7',
       height:63,
       width:374,
       borderRadius:15,
       marginBottom: 20,
       paddingLeft:20,
 }
}

)