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
  Button,
  ActivityIndicator,
  Alert
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
import Back from '../assets/backarrow';
import firestore from '@react-native-firebase/firestore';

function Signup({navigation}) {
  const [Name, setName] = useState('')
  const [Password, setPassword] = useState('')
  const [email, setemail] = useState('')
  const [Loader, setLoader] = useState(false)
  // ------------------------------------------------LOADER-----------------------------------------------------------------
  function Activityloader()
{
  if(Loader)
  {
    return(
      // setInterval(() => {
        <ActivityIndicator color = 'white'size = "large" />
    
      // }, 1000)
    )
  }
}
    

  //       setInterval(() =>
  //       {
  //       <ActivityIndicator color = 'white'size = "large" />
  //       },
  //       1000
  //       )
  //   )
  // }

  // ------------------------------------------------SIGNIN WITH MAIL & PASSWORD----------------------------------------
  async function signinwithmailpassword(){
  
   if(email==''||Password=='')
   {
     Alert.alert('Enter details')
   }
   else{

  setLoader(true) 
  auth()
  .createUserWithEmailAndPassword(email, Password)
  .then((res) => {
    res.user.updateProfile({
      displayName: Name
    })
    console.log(email,Password);


   
    // console.log('User account created & signed in!');
    setLoader(false) 
    Alert.alert('User account created & signed in!')
  
    
   
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') 
    {
      setLoader(false) 
      // console.log('That email address is already in use!');
      Alert.alert('That email address is already in use!')
    }

    if (error.code === 'auth/invalid-email') {
      setLoader(false) 
      // console.log('That email address is invalid!');
      Alert.alert('auth/invalid-email')
    }

    // console.error(error);
  });
}
 }
  //------------------------------------------------GOOGLE SIGNIN CODE-------------------------------------------------- 
  GoogleSignin.configure({
    webClientId:"366845209365-76a7prfb9aqke96206bnftnua7isc2u1.apps.googleusercontent.com",
  });
  async function onGoogleButtonPress() {
    // navigation.navigate('Welcome');
    
    setLoader(true)
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
      setLoader(false)
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      setLoader(false)
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return (
      setLoader(true),
      auth().signInWithCredential(facebookCredential)
    )
  }
    return (
       <>
       <View style={styles.header}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Back />
            </TouchableOpacity>
            </View>
          <ScrollView style={{flex:1}}>
          <Text style={styles.text}>Create your account</Text>
          {/*-----------------------------------------FACEBOOK LOGIN------------------------------------ */}
          <View style={{alignItems:"center",justifyContent:"space-around",marginTop:40}}>
            <TouchableOpacity 
            style={styles.button1}
            onPress={()=>
              // console.log('fb sign in')
              onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))
            }>
                 <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:10}}>
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
               <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:10}}>
             
               <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
               <Path d="M23.6496 12.7673C23.6496 11.778 23.5693 11.056 23.3956 10.3074H12.0984V14.7727H18.7296C18.596 15.8824 17.874 17.5536 16.2697 18.6765L16.2472 18.826L19.8191 21.5932L20.0666 21.6179C22.3394 19.5189 23.6496 16.4305 23.6496 12.7673Z" fill="#4285F4"/>
               <Path d="M12.0984 24.5324C15.3471 24.5324 18.0745 23.4628 20.0666 21.6178L16.2696 18.6765C15.2536 19.3851 13.8899 19.8798 12.0984 19.8798C8.91653 19.8798 6.21593 17.7808 5.25324 14.8797L5.11213 14.8917L1.39797 17.7661L1.3494 17.9011C3.32805 21.8317 7.39235 24.5324 12.0984 24.5324Z" fill="#34A853"/>
               <Path d="M5.25326 14.8797C4.99924 14.131 4.85223 13.3288 4.85223 12.4999C4.85223 11.671 4.99924 10.8688 5.23989 10.1202L5.23316 9.9607L1.47245 7.0401L1.34941 7.09863C0.533913 8.72971 0.065979 10.5614 0.065979 12.4999C0.065979 14.4385 0.533913 16.27 1.34941 17.9011L5.25326 14.8797Z" fill="#FBBC05"/>
               <Path d="M12.0988 5.12005C14.3582 5.12005 15.8823 6.09601 16.7513 6.9116L20.1471 3.59597C18.0616 1.65741 15.3475 0.467529 12.0988 0.467529C7.39272 0.467529 3.32841 3.16813 1.34976 7.0987L5.24024 10.1202C6.2163 7.21907 8.91689 5.12005 12.0988 5.12005Z" fill="#EB4335"/>
               </Svg>
               <Text>CONTINUE WITH GOOGLE</Text>
              </View>
            </TouchableOpacity>
          
{/* ----------------------------------------WITH MAIL AND PASSWORD----------------------------------------------- */}
            <Text style={{alignSelf:'center',marginTop:30}}>or sign up with email</Text>
            <View style={{marginTop:40}}>

            <TextInput placeholder="Name" style={styles.textinput} onChangeText={(value)=>setName(value)}></TextInput>
            <TextInput placeholder="Email" style={styles.textinput} onChangeText={(value)=>setemail(value)}></TextInput>
            <TextInput placeholder="Password" style={styles.textinput} onChangeText={(value)=>setPassword(value)} secureTextEntry={true}></TextInput>
            </View>

            <View style={{marginTop:40,justifyContent:"center",alignItems:"center"}}>
             
            <TouchableOpacity style={styles.button3} onPress={()=>
            signinwithmailpassword()
             }> 
              {
              Activityloader()
              }


            <Text style={{fontFamily:'Roboto',fontSize:16,alignItems:'center',justifyContent:'center',fontWeight:"bold",color:"white",marginTop:9}}>
              Sign Up</Text>
            </TouchableOpacity>
           
            </View>
            </View>  
            </ScrollView>
   </>
    )

          }
const styles = StyleSheet.create({
    header:{
      // flex: 1,
      marginTop:20,
      marginLeft:20
    },

    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },

    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
    },

    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },

    text:{
      alignSelf:'center',
      fontSize:23,
      fontFamily:'Roboto',
      fontWeight:'bold',
      alignContent:"center",
      marginTop:30
        
   },

       button1:{
       backgroundColor: 'rgba(17, 111, 175, 1)',
       borderRadius: 55,
       width:280,
       height:45,
   },

       button2:{
        backgroundColor:'#E9EAF0',
        height:50,
        borderColor:"rgba(235, 234, 236, 1)",
        borderWidth:1,
        borderRadius: 55,
        width:280,
        height:45,
        marginTop:10    
   },

        button3:{
       backgroundColor: "rgba(17, 111, 175, 1)",
        borderRadius: 55,
        width:280,
        height:45,
        flexDirection: 'row',
       justifyContent: 'center',
        marginBottom: 20,
   },

      textinput:{
        backgroundColor:'#E9EAF0',
      // backgroundColor:'rgba(242, 243, 247, 1)',
      height:45,
      width:300,
      borderRadius:15,
      marginBottom: 20,
      borderWidth:1,
      alignContent:"center",
      borderColor:"rgba(242, 243, 247, 1)",
      paddingLeft:14

    
   }

  });
  export default Signup