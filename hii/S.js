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
    Mask,
} from 'react-native-svg';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import Signup from '../mine/Signup';
import Welcome from '../AppScreens/Welcome';
export default function S({navigation}) {
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [email, setemail] = useState('')
  // ------------------------------------------------SIGNIN WITH MAIL & PASSWORD----------------------------------------
  async function signinwithmailpassword(){
    
   console.log(email,Password);
 
  auth()
  .createUserWithEmailAndPassword(email, Password)
  .then(() => {
  
    console.log('User account created & signed in!');
    
   
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
 }
  //------------------------------------------------GOOGLE SIGNIN CODE-------------------------------------------------- 
  GoogleSignin.configure({
    webClientId:  "366845209365-76a7prfb9aqke96206bnftnua7isc2u1.apps.googleusercontent.com",
  });
  async function onGoogleButtonPress() {
    // navigation.navigate('Welcome');
    
   
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
   
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
    
  }
// }
// -------------------------------------FACEBOOK SIGNIN CODE--------------------------------------------
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
    return (
        <View style={{margin:20}}>
          <ScrollView>
          <Text style={styles.text}>Create your account</Text>
          {/*-----------------------------------------FACEBOOK LOGIN------------------------------------ */}
            <TouchableOpacity 
            style={styles.button1}
            onPress={()=>onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
                 <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:40}}>
                 <Svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <Path d="M10.6776 4.92937H12.8745V1.10305C12.4955 1.05091 11.192 0.933594 9.67389 0.933594C6.50635 0.933594 4.33649 2.92597 4.33649 6.58785V9.95794H0.841064V14.2355H4.33649V24.9985H8.62206V14.2365H11.9761L12.5085 9.95894H8.62105V7.01199C8.62206 5.77566 8.95495 4.92937 10.6776 4.92937Z" fill="white"/>
                 </Svg>
                 <Text style={{fontSize:14,fontFamily:"Roboto",color:"white"}} >CONTINUE WITH FACEBOOK</Text>
                 </View>
            </TouchableOpacity>
            {/* -------------------------------------------GOOGLE LOGIN------------------------------------- */}
            <TouchableOpacity 
            style={styles.button2}
            onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!')
            )}
  >
               <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:40}}>
               <View style={{paddingStart:10}}>
               <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path d="M23.6496 12.7673C23.6496 11.778 23.5693 11.056 23.3956 10.3074H12.0984V14.7727H18.7296C18.596 15.8824 17.874 17.5536 16.2697 18.6765L16.2472 18.826L19.8191 21.5932L20.0666 21.6179C22.3394 19.5189 23.6496 16.4305 23.6496 12.7673Z" fill="#4285F4"/>
               <Path d="M12.0984 24.5324C15.3471 24.5324 18.0745 23.4628 20.0666 21.6178L16.2696 18.6765C15.2536 19.3851 13.8899 19.8798 12.0984 19.8798C8.91653 19.8798 6.21593 17.7808 5.25324 14.8797L5.11213 14.8917L1.39797 17.7661L1.3494 17.9011C3.32805 21.8317 7.39235 24.5324 12.0984 24.5324Z" fill="#34A853"/>
               <Path d="M5.25326 14.8797C4.99924 14.131 4.85223 13.3288 4.85223 12.4999C4.85223 11.671 4.99924 10.8688 5.23989 10.1202L5.23316 9.9607L1.47245 7.0401L1.34941 7.09863C0.533913 8.72971 0.065979 10.5614 0.065979 12.4999C0.065979 14.4385 0.533913 16.27 1.34941 17.9011L5.25326 14.8797Z" fill="#FBBC05"/>
               <Path d="M12.0988 5.12005C14.3582 5.12005 15.8823 6.09601 16.7513 6.9116L20.1471 3.59597C18.0616 1.65741 15.3475 0.467529 12.0988 0.467529C7.39272 0.467529 3.32841 3.16813 1.34976 7.0987L5.24024 10.1202C6.2163 7.21907 8.91689 5.12005 12.0988 5.12005Z" fill="#EB4335"/>
               </Svg>
               </View>
               <Text>CONTINUE WITH GOOGLE</Text>
              </View>
            </TouchableOpacity>
{/* ----------------------------------------WITH MAIL AND PASSWORD----------------------------------------------- */}
            <Text style={{alignSelf:'center',marginBottom: 40,}}>or log in with email</Text>
            <TextInput placeholder="name" style={styles.textinput} onChangeText={(value)=>setName(value)}></TextInput>
            <TextInput placeholder="email" style={styles.textinput} onChangeText={(value)=>setemail(value)}></TextInput>
            <TextInput placeholder="password" style={styles.textinput} onChangeText={(value)=>setPassword(value)}></TextInput>
            <View style={{marginTop:80}}>
            <TouchableOpacity style={styles.button3} onPress={()=>
            signinwithmailpassword()
          
            }>
            <Text style={{fontFamily:'Roboto',fontSize:18,color:'white',fontWeight:'500'}}>Get Started</Text>
            </TouchableOpacity>
            </View>  
            </ScrollView>
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
        backgroundColor: "#7583CA",
        borderRadius: 38,
        // flexDirection:'column',
         paddingVertical: 12,
          paddingHorizontal: 12,
        // flexDirection: 'row',
    // justifyContent: 'center',
    
    
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
         
    },
    button3:{
        height:50,
        backgroundColor: "#7583CA",
        borderRadius: 38,
        // flexDirection:'column',
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
       


    }
}

)