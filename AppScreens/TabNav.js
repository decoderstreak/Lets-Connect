import React from 'react'
import { View, Text } from 'react-native'
// import Relax from './Relax';
import Home from './Home';
import Mentors from './Mentors';
import RelaxIcon from '../Icons/RelaxIcon';
import ConnectIcon from '../Icons/ConnectIcon';
import MentorIcon from '../Icons/MentorIcon';
import Sadhana from './sadhana/Sadhana';
import Relax from '../Relax/Relax'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MentorFocusedIcon from '../Icons/MentorFocusedIcon';
const Tab = createBottomTabNavigator();
export default function TabNav() {
    return (
        <Tab.Navigator initialRouteName="Connect"
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                height:60,
                elevation:0
            }
        }}
        >
        <Tab.Screen 
        name="Relax" component={Relax}
        options={{
            tabBarIcon:({focused})=>(
                <View style={{flexDirection:'column'}}>
                <View style={{
                    borderRadius:15,
                    width:40,height:40,
                    backgroundColor:focused ? '#116FAF' :'white',
                    alignItems:'center',
                    justifyContent:'center',
                    elevation:focused ? 1 : 0}}>
                    <RelaxIcon props={focused ?'white':'black'}/> 
                </View>
                    <Text style={{color:focused ? '#116FAF' : 'black',fontSize:10}}>Relax</Text>
                </View>
            )
        }}/>
            <Tab.Screen
             name="Connect" component={Home}
             options={{
                tabBarIcon:({focused})=>(
                    <View style={{flexDirection:'column'}}>
                    <View style={{
                        borderRadius:15,
                        width:40,height:40,
                        backgroundColor:focused ? '#116FAF' :'white',
                        alignItems:'center',
                        justifyContent:'center',
                        elevation:focused ? 1 : 0}}>      
                        <ConnectIcon props={focused ?'white':'black'}/> 
                    </View>
                        <Text style={{color:focused ? '#116FAF' : 'black',fontSize:10}}>Connect</Text>
                    </View>
                )
            }}/>
            <Tab.Screen
               name="Mentors" component={Mentors}
               options={{
                tabBarIcon:({focused})=>(
                    <View style={{flexDirection:'column'}}>
                    <View style={{
                        borderRadius:15,
                        width:40,height:40,
                        backgroundColor:focused ? '#116FAF' :'white',
                        alignItems:'center',
                        justifyContent:'center',
                        elevation:focused ? 1 : 0}}>
                        <MentorIcon props={focused ?'white':'black'}/> 
                    </View>
                        <Text style={{color:focused ? '#116FAF' : 'black',fontSize:10}}>Mentors</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}
