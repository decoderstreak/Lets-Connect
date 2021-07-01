import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Stack from '../navigation/stack'
import Welcome from '../AppScreens/Welcome';
import AppScreenStack  from '../AppScreens/AppScreenStack';
export default class AuthScreens extends Component { constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }
  componentDidMount = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("a user is there", auth().currentUser.email, user.uid, "and i am from sample.js bro")
        this.state.x = 1;
        this.setState({ x: this.state.x })
      } else {
        this.state.x = 0;
        this.setState({ x: this.state.x })
        console.log("no  user is there and i am from smaple .js bro")

      }
    })
  }
 
    render() {
            if (this.state.x == 1) {
                return (
                    <NavigationContainer>
                        <AppScreenStack/>
                    </NavigationContainer>
                )
              }
              else {
                return (
                    <NavigationContainer>
                      <Stack/>
                    </NavigationContainer>
                )
              }
    }
}
