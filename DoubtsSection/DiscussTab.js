import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, {Component} from 'react';
import DiscussTech from './DiscussTech';
import DiscussNonTech from './DiscussNonTech';
import { Text, View ,TouchableOpacity} from 'react-native';
import Back from '../assets/backarrow';
import { grey } from 'chalk';
import DiscussStack from './DiscussStack';
const Tab = createMaterialTopTabNavigator();

 export default function DiscussTab() {
  return (
    <View style={{backgroundColor:'white',flex:1,elevation: 6}}>
      <View 
      style={{
          display:'flex',
          flexDirection:'row',
          margin:'5%', 
          marginBottom:'3%'
          }}>
              <View style={{marginRight:'5%'}}>
              <TouchableOpacity>
                  <Back/>
              </TouchableOpacity>
              </View>
      {/* <Ionicons name="ios-arrow-back-circle-outline" size={45} color="black" /> */}
        <Text style={{fontWeight:'bold',fontSize:22,justifyContent:'center'}}>Discuss</Text>
      </View>
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Technical" component={DiscussStack} 
      options={{
         tabBarLabel:({focused})=>(
             <View style={{fontSize:16}}>
                 <Text style={{color: focused ? '#116FAF' : 'grey'}}>Technical</Text>
             </View>
         )
      }}/>
      <Tab.Screen name="Non-Technical" component={DiscussNonTech} 
       options={{
        tabBarLabel:({focused})=>(
            <View style={{fontSize:16}}>
                <Text style={{color: focused ? '#116FAF' : 'grey'}}>Non-Technical</Text>
            </View>
        )
     }}/>
    </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}