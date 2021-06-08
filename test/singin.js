import React, { Component } from 'react';
import { View, Text ,StyleSheet, ScrollView, TouchableOpacity,TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check:false,
      password:'',
      email:'',
    };
  }

  // signupbuttonclicking=()=>{ 
  //   console.log("hiiii", this.state.email,this.state.password)
  //   auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  //     .then(() => {
  //       console.log('signed in!');
  //       alert("let's navigate to home screen");
        
  //     })
  //     .catch(error => {
  //       alert(error.code)
  //       console.log(error.code);
  //       console.log(error.message);
  //       // if (error.code === 'auth/invalid-email') {
  //       //   console.log('That email address is invalid!');
  //       //   alert(error.code)
  //       // }
  //     })
  //   }
  usernamevalue=(e)=>{
    console.log(e)
 }
 
 
 signupbuttonclicking=()=>{
   console.log("hiiii", this.state.email,this.state.password)
     auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
     .then(() => {
       console.log('User account created & signed in!');
       alert("User account created and please log in")
       
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

  render() {
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
    return (
        <ScrollView style={styles.container}>
            <View>
      <View style={styles.header}>
      <Text style={{color:"white"}}>hii , hello Uman Having fun right{'\n'}{'\n'} Let's create an amazing chat app</Text>
     

  

      <View style={{flexDirection:'row',color:"grey"}}>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.text1}>Google</Text>

      </TouchableOpacity>
      

      <TouchableOpacity style={styles.button1}>
          <Text  style={styles.text1}>Facebook</Text>

      </TouchableOpacity>
      </View>

      </View>

      {/* ......................input data.................... */}

      <View style={{flex:1,marginLeft:20}}>
          <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12}}>Name</Text>
          <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        // onChangeText={onChangeText}
        // value={text}
      />
       <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12}}>Email</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        onChangeText={(emailvalue)=>{this.setState({email:emailvalue})}}
       
                
        // keyboardType="numeric"
      />
      <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12}}>Password</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
        onChangeText={(passvalue)=>{this.setState({password:passvalue})}}
      />
          
     </View>

     <TouchableOpacity style={styles.button1} onPress={this.signupbuttonclicking}>
         <Text>Signup!!</Text>

     </TouchableOpacity>
     <TouchableOpacity style={styles.button1} onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}>
         <Text>Google</Text>

     </TouchableOpacity>
     <Text style={{fontWeight:"500",color:"white",fontFamily:"Roboto",fontSize:17,marginLeft:12,marginTop:30}}>Already have an account---Login dude</Text>
  

      </View>
      </ScrollView>
    );
  }
}

export default Login;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'black'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:50
    },
    header1:{
        
        marginTop:40

    },
    footer: {
      flex:3,
      width:"94%",
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30,
      marginLeft:11,
    },
    logo: {
      height: 250,
      width: 246,
      backgroundColor: "black",
      borderRadius: 250/2, 
    },
  
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
  
    text: {
        color: 'white',
        fontSize:16,
        fontFamily:'Roboto',
        fontWeight:"400"
    },
    text1: {
       
        fontSize:15,
        fontFamily:'Roboto',
        fontWeight:"500"
    },
  
    button: {
        marginTop: 30,
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      width:150,
      height:40,

      backgroundColor:"#DDDDDD",
      marginTop:10,
      borderColor:"#DDDDDD",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      
    },
    button1 :{
      marginTop: 30,
      alignSelf:'stretch',
      alignItems:"center",
      padding:20,
      width:150,
      height:40,

      backgroundColor:"#DDDDDD",
      marginTop:10,
      borderColor:"#DDDDDD",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginLeft:10
  
    },
  
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor:"#DDDDDD",
      borderRadius:10,
      color:"white",
      
    },
   
    ButtonText: {
      fontSize: 18,
      color: "#fff",
      
      fontWeight: "bold",
      alignSelf: "center",
     
    },
    ButtonText1: {
      fontSize: 18,
      color: "black",
      fontWeight: "bold",
      alignSelf: "center",
     
    }
  });