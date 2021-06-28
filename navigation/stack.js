import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../AppScreens/Welcome';
import Logo from '../Screens/Logo';
import S from '../hii/S';

// import Signup from '../mine/Signup';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Connect from '../Screens/Connect';
import Home from '../AppScreens/Home';
import Profile from '../hii/Profile';
const stackScreen =createStackNavigator();
function Stack(){
    return(
        <stackScreen.Navigator headerMode="none" initialRouteName="Logo">
          <stackScreen.Screen name="Logo" component={Logo} />
          <stackScreen.Screen name="Welcome" component={Welcome} />
          <stackScreen.Screen name="Signup" component={Signup} />
          <stackScreen.Screen name="Login" component={Login} />
          {/* <stackScreen.Screen name="Home" component={Home}/>
          <stackScreen.Screen name="Profile" component={Profile}/> */}
        </stackScreen.Navigator>
    )


}
export default Stack;