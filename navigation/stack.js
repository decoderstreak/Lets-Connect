import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../Screens/Welcome';
import Logo from '../Screens/Logo';
// import S from '../hii/S';
// import Signup from '../mine/Signup';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';

const stackScreen =createStackNavigator();


function Stack(){
    return(
        <NavigationContainer>
        <stackScreen.Navigator headerMode="none">
         
          <stackScreen.Screen name="Logo" component={Logo} />
          <stackScreen.Screen name="Welcome" component={Welcome} />
          <stackScreen.Screen name="Signup" component={Signup} />
          <stackScreen.Screen name="Login" component={Login} />
        </stackScreen.Navigator>
      </NavigationContainer>
    )


}
export default Stack;