import React, { Component,useRef } from 'react';
import { StyleSheet, View, Text, Button,Image,TouchableOpacity } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
// import image from '../assets/Avatar.png';
import RBSheet from "react-native-raw-bottom-sheet";
import Callender from '../assets/callender';
import Emailicon from '../assets/Emailicon';
import Nameicon from '../assets/name';
import Firebase from '@react-native-firebase/app'
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
export default class Connect extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }
componentDidMount=()=>{
  firebase.initializeApp(this)
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
  
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });
}
  signOut = () => {
    auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: auth().currentUser.displayName,
      uid: auth().currentUser.uid,
      email:auth().currentUser.email,
    }    
 
    return (
   

    <View
            // style={{
            //   flex: 1,
            //   justifyContent: "center",
            //   alignItems: "center",
            //   backgroundColor: "#ADD8E6"
            // }}
          >
            <Button title ="push notification"/>
            <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
            <RBSheet
             ref={ref => {
            this.RBSheet = ref;
            }}
              closeOnDragDown={true}
              closeOnPressMask={true}
              height={500}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent"
                },
                container:
                {
                    borderRadius:20
    
                },
                draggableIcon: {
                  backgroundColor: "#000"
                },
              }}
            >
                <View>
              <Text style={{fontSize:34,marginLeft:20}}>My profile</Text>

              <View style={styles.container}>
              <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2Fava.png?alt=media&token=d972b798-599a-4a2f-9a63-06a1cf7464b8'}} />
              <Text style={{fontSize:20,marginTop:18,color:'#222222'}}> {this.state.displayName}</Text>
              <TouchableOpacity >
                  <Text style={{marginLeft:150,marginTop:20,fontSize:15,color:'#116FAF'}}>Edit</Text>
              </TouchableOpacity>
              </View>
              <View>
              <View style={styles.name}>
             
              <View style={{marginLeft:-10}}>
              <Nameicon />
              </View>
              <Text style={{fontSize:20,marginLeft:-80}}>Name</Text>
              <Text style={{fontSize:16,color:'#9B9B9B'}}> {this.state.displayName}</Text>
              </View>
              <View
                style={{
               borderBottomColor: '#E8E8E8',
               borderBottomWidth: 0.25,
               height:0.5,
                width:340,
               marginTop:28
                  }}
              />
    
              <View style={{ display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
             
              <Emailicon />
              <Text style={{fontSize:20,marginLeft:-15}}>E-mail</Text>
              <Text style={{fontSize:16,color:'#9B9B9B'}}> {this.state.email}</Text>
              </View>
              <View
                style={{
               borderBottomColor: '#E8E8E8',
               borderBottomWidth: 0.25,
                width:340,
               marginTop:28,
               marginLeft:-20
                  }}
              />
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20,marginLeft:-10}}>
            
              <Callender />
              <Text style={{fontSize:20,marginLeft:-30}}>Academic Year</Text>
              <Text style={{fontSize:16,color:'#9B9B9B'}}>2020</Text>
              </View>
              <View
                style={{
               borderBottomColor: '#E8E8E8',
               borderBottomWidth: 0.25,
                width:340,
               marginTop:28
                  }}
              />
              </View>
              </View>
            </RBSheet>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
  name:
      {
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:50,
          marginLeft:-25
      },
      container: {
              display:'flex',
              flexDirection:'row',
              marginLeft:20,
              marginTop:20
            },
}
)

