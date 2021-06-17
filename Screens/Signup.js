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

//Facebook
async function onFacebookButtonPress() {
  // Attempt login with permissions
  const Users = firestore().collection('Users');
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
 GoogleSignin.configure({
  webClientId:  "366845209365-76a7prfb9aqke96206bnftnua7isc2u1.apps.googleusercontent.com",
});

async function onGoogleButtonPress() {

  
 
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();


  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
 

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}






class  Signup extends React.Component{
    constructor() {
        super();
        this.state = { 
          displayName: '',
          email: '', 
          password: '',
          isLoading: false
        }
      }

      updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }

       registerUser = () => {
       
      
          console.log("Signup")
          if(this.state.email === '' && this.state.password === '') {
            Alert.alert('Enter details to signup!')
          } 
        
          console.log("hello", this.state.email, this.state.password)
          auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
              res.user.updateProfile({
              displayName: this.state.displayName
            }) 
            firestore().doc('Users/' + auth().currentUser.uid).set({
              name: this.state.displayName,
              email: this.state.email,
              password: this.state.password,
              Accademic: 2017,
              // lname
            }).then((data) => {
              //success callback
              console.log('data ', data)
            }).catch((error) => {
              //error callback
              console.log('error ', error)
            })
     
              
               
      
              console.log('User account created!');
              alert("User account created!! Login to connect")
              this.setState({
                      isLoading: false,
                      displayName: '',
                      email: '', 
                      password: ''
                    })
                    this.props.navigation.navigate('Login')
             
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                alert(error.code)
              }
      
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                alert(error.code)
              }
              
      
              console.error(error);
            });
          
      }

     




    render(){
        if(this.state.isLoading){
            return(
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
              </View>
            )
          }    
          return (
            <View style={{margin:20}}>
          <ScrollView>
            <View style={{flexDirection:"row",marginBottom:30}}>
              <TouchableOpacity onPress={()=> this.props.navigation.navigate('Logo')}>
           <Back /> 
           </TouchableOpacity>
          <Text style={styles.text}>Create your account</Text>
          </View>
          {/*-----------------------------------------FACEBOOK LOGIN------------------------------------ */}
          <View style={{}}>
            <TouchableOpacity 
            style={styles.button1}
            onPress={() => {
              onFacebookButtonPress().then(() => {
               
                console.log('Signed in with Facebook!')
              })
            }}
           >
                 <View style={{flexDirection:"row",justifyContent:"space-around",paddingRight:40}}>
                 <Svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <Path d="M10.6776 4.92937H12.8745V1.10305C12.4955 1.05091 11.192 0.933594 9.67389 0.933594C6.50635 0.933594 4.33649 2.92597 4.33649 6.58785V9.95794H0.841064V14.2355H4.33649V24.9985H8.62206V14.2365H11.9761L12.5085 9.95894H8.62105V7.01199C8.62206 5.77566 8.95495 4.92937 10.6776 4.92937Z" fill="white"/>
                 </Svg>
                 <Text style={{fontSize:14,fontFamily:"Roboto",color:"white",fontWeight:'400'}} >CONTINUE WITH FACEBOOK</Text>
                 </View>
            </TouchableOpacity>

            </View>
            {/* -------------------------------------------GOOGLE LOGIN------------------------------------- */}
            <TouchableOpacity 
            style={styles.button2}
            onPress={() => onGoogleButtonPress().then(() => {
              
              console.log('Signed in with Google!')
            })}
          
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
            <Text style={{alignSelf:'center',marginBottom:20,color:"rgba(161, 164, 178, 1)",fontFamily:"Roboto",fontWeight:'400'}}>OR LOG IN WITH EMAIL</Text>

            <TextInput placeholder="NAME" style={styles.textinput} value={this.state.displayName}
                onChangeText={(val) => this.updateInputVal(val, 'displayName')}>

                </TextInput>
            <TextInput placeholder="EMAIL ADDRESS" style={styles.textinput} 
             value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
            // onChangeText={(value)=>setemail(value)}
            ></TextInput>

            <TextInput placeholder="PASSWORD" style={styles.textinput} 
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            value={this.state.password}
            secureTextEntry={true}
            >
            </TextInput>

            <View style={{marginTop:80}}>

            <TouchableOpacity style={styles.button3} onPress={() => this.registerUser()}>
            <Text style={{fontFamily:'Roboto',fontSize:18,color:'white',fontWeight:'500',marginLeft:-10}}>Sign Up</Text>
            </TouchableOpacity>
            </View>  
            </ScrollView>
        </View>
          );
        }
      }

export default Signup;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 35,
      backgroundColor: '#fff'
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
      fontSize:28,
      fontFamily:'Roboto',
      fontWeight:'400',
      lineHeight:37.8,
      marginTop:65,
      marginLeft:-9
      

      
   },
   button1:{
       height:50,
       backgroundColor: 'rgba(17, 111, 175, 1)',
       borderRadius: 38,
       paddingVertical: 12,
       paddingHorizontal: 12,
      marginBottom: 20,
       
   },
   button2:{
        height:50,
        // backgroundColor: "rgba(235, 234, 236, 1)",
        borderColor:"rgba(235, 234, 236, 1)",
        borderWidth:1,
        borderRadius: 38,
        paddingVertical: 12,
        paddingHorizontal: 12,
        marginBottom: 30,
        
   },
   button3:{
       height:50,
       backgroundColor: "rgba(17, 111, 175, 1)",
       borderRadius: 38,
      
        paddingVertical: 12,
         paddingHorizontal: 12,
        flexDirection: 'row',
       justifyContent: 'center',
   
   
        marginBottom: 20,
       
   },
   textinput:{
      
      backgroundColor:'rgba(242, 243, 247, 1)',
      height:63,
      width:315,
      borderRadius:15,
      marginBottom: 20,
      borderWidth:1,
      borderColor:"rgba(242, 243, 247, 1)"
      


   }

  });