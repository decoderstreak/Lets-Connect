import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './welcome/Welcome'
import TabNav from './TabNav';
import Profile from '../hii/Profile';
import Cards from '../Cards/Cards'
import Cards2 from '../Card2/Card2'
// import Mentors from './Mentors';
import Mentor from '../Mentors/Mentor'
import Eachmentor from '../Mentors/Eachmentor'
import CourseSlider from './Slider/CourseSlider';
import TestButtons from '../StorageDataBase/TestButtons';
import Player1 from '../Relax/Player1';
import Player2 from '../Relax/Player2';
import Player3 from '../Relax/Player3';
import Playerrr from '../Sounds/Track';
import YouTube from './Slider/YouTube';
import CourseSliderCls from './Slider/CourseSliderCls';
import DiscussTab from '../DoubtsSection/DiscussTab' 
import AnswersTech from '../DoubtsSection/AnswersTech';
import DiscussTech from '../DoubtsSection/DiscussTech';
import DiscussStack from '../DoubtsSection/DiscussStack';
const Stack = createStackNavigator();
export default function AppScreenStack() {
    return (
       <Stack.Navigator headerMode={false} 
    //    initialRouteName="Test"
       >
           <Stack.Screen name="Welcome" component={Welcome}/>
           <Stack.Screen name="Tabnav" component={TabNav}/>
           <Stack.Screen name="Profile" component={Profile}/>
           <Stack.Screen name="Cards" component={Cards}/>
           <Stack.Screen name="Cards2" component={Cards2}/>
           <Stack.Screen name="Mentor" component={Mentor}/>
           <Stack.Screen name="CourseSlider" component={CourseSlider}/>
           <Stack.Screen name="CourseSliderCls" component={CourseSliderCls}/>
           <Stack.Screen name="Eachmentor" component={Eachmentor}/>
           <Stack.Screen name="Test" component={TestButtons}/>
           <Stack.Screen name="YouTube" component={YouTube}/>
           {/* <Stack.Screen name="DiscussStack" component={DiscussStack}/>
           <Stack.Screen name="DiscussTech" component={DiscussTech}/>
           <Stack.Screen name="AnswersTech" component={AnswersTech}/> */}
           <Stack.Screen name="Player1" component={Player1} options={{headerShown:false}} />
            <Stack.Screen name="Player2" component={Player2} options={{headerShown:false}} />
            <Stack.Screen name="Player3" component={Player3}  options={{headerShown:false}}/>
            <Stack.Screen name="Track" component={Playerrr} options={{headerShown:false}}  />
       </Stack.Navigator>
    )
}
