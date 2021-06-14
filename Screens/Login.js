import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator, ScrollView } from 'react-native';
import {
    TouchableOpacity,
 
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
// import firebase from '../database/firebase';
import auth from '@react-native-firebase/auth';
import Back from '../assets/backarrow';


export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false,
      l: 0,
      x:0,
    }
  }

   updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    this.setState({ l: 1 })
    console.log("hlo", this.state.email, this.state.password)

    if(this.state.email === '' || this.state.password === '') {
      Alert.alert('Enter details to signin!')
      setTimeout(() => {
        this.setState({ l: 0 })
      }, 1000)
    }
     else {
      this.setState({
        isLoading: true,
      })
   
      auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        auth().onAuthStateChanged((user) => {
            if (user) {
          
              this.state.x = 1;
              this.setState({ x: this.state.x, l: 0 })
              console.log("a user", auth().currentUser.email, "and logged in", this.state.x)

            } else {
              
              console.log("logged out", this.state.x, "is x")

            }
          })

        
        this.props.navigation.navigate('Connect')
      })
    
    .catch(error => {
        alert(error.code)
        this.setState({ l: 0 })
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          alert(error.code)
        }
      })
      
    }
  }

  render() {
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
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Logo')}>
      
            <Back />
            </TouchableOpacity >
           <Text style={styles.text}>Welcome Back!</Text>
           </View>
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
            <Text style={{alignSelf:'center',marginBottom: 40,}}>OR LOGIN WITH EMAIL</Text>
            <TextInput  style={styles.textinput} 
                 placeholder="Email"
                 value={this.state.email}
                 onChangeText={(val) => this.updateInputVal(val, 'email')}
            ></TextInput>

            <TextInput
            style={styles.textinput} 
                  placeholder="Password"
                  value={this.state.password}
                  onChangeText={(val) => this.updateInputVal(val, 'password')}
                  maxLength={15}
                  secureTextEntry={true}
            
            ></TextInput>
            
            <TouchableOpacity 
            style={styles.button3}
            onPress={() => this.userLogin()}>
 <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:180}}>
 <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:14,marginBottom:40}}>Forgot password?</Text>
 </TouchableOpacity>
 
 <View style={{flexDirection:'row',justifyContent:'center',}}>
            <Text style={{fontSize:14}}>Don't have an account?</Text>
            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}><Text style={{color:'rgba(142, 151, 253, 1)'}}> Sign up</Text></TouchableOpacity>
            </View>
            </ScrollView>
 
        </View>
    );
  }
}

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
    fontWeight:'bold',
    lineHeight:37.8,
    marginTop:70,
    marginBottom:40    
 },
 button1:{
     height:50,
     backgroundColor: "rgba(17, 111, 175, 1)",
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
    //  backgroundColor: "#EFF4FF",
    borderWidth:1,
    borderColor:"rgba(235, 234, 236, 1)",
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
     backgroundColor: "rgba(17, 111, 175, 1)",
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
});