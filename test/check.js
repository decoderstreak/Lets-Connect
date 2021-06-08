import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
// auth()
//   .signInAnonymously()
//   .then(() => {
//     console.log('User signed in anonymously');
//   })
//   .catch(error => {
//     if (error.code === 'auth/operation-not-allowed') {
//       console.log('Enable anonymous in your firebase console.');
//     }

//     console.error(error);
//   });
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
class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View>
        <Text> check </Text>
        <TouchableOpacity 
        style={{borderWidth:2,width:50,height:30,justifyContent:'center',marginLeft:150,marginTop:50}}
        onPress={()=>onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}>
          <Text>fblogin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Check