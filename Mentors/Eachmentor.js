import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Touchable,
  TextInput,
  Image,
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
  Mask,
  
 
} from 'react-native-svg';
import {Card} from 'react-native-shadow-cards';
import Back from '../assets/backarrow';
import MentorAvatar from '../Cards/MentorAvatar.png'
export default function Mentor({route,navigation})
{
  // list=()=>{
  //  console.log('in each mentor broo', (route.params.list.Name))
  // }
  // var list=navigation.getParam('list'),
  return(
    <View style={{flex:1,backgroundColor:"white",}}>
                
                <View style={styles.header}>
                   <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Back />
                    </TouchableOpacity>
                 
                    <Text style={styles.heading}>Mentor</Text></View>
              {/* {list()} */}
    {/* ---------------------------------------------------Header---------------------------------------------------------- */}
      
      <ScrollView>
    <View style={{marginTop:40,marginBottom:20,flex:1,alignItems:"center"}}>

      <View style={{alignItems:"center"}}>
      <Image source={MentorAvatar}  style={{
                            height: 120,
                            width: 120,
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>  
                         
        </View> 


        <View style={{alignItems:'center',marginTop:10,alignContent:"center"}}>
        <Text style={{fontSize:22,color:'black'}}>{route.params.Name}</Text>
        <Text style={{color:'#9A8B8B'}}>
          {route.params.Edu}
        </Text>
          </View>



  <View style={{marginTop:20}}>

  <Text style={{fontSize:15,marginLeft:5}}>Current Working Status</Text>
  <View style={{marginTop:7}}>
  <Card style={{height:51,paddingTop:12,paddingLeft:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
  <Text style={{fontSize:14,color:'#9A8B8B',}}>{route.params.Status}</Text>
  </Card>
  </View>
  </View>
  <View style={{marginTop:20}}>
  <Text style={{fontSize:15,marginLeft:5}}>Skills</Text>
  <View style={{marginTop:7}}>
  <Card style={{height:105,paddingTop:12,paddingLeft:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
<Text style={{fontSize:14,color:'#9A8B8B',}}>{route.params.Skills}</Text>
  </Card>
  </View>
  </View>  
  <View style={{paddingTop:20}} >
      <Card style={{height:220,paddingTop:20,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}} containerStyle={{borderRadius:10,borderWidth:2}}>
       
      <ScrollView horizontal={true}>     
    <View style={{flexDirection:'row',justifyContent:"space-between",flexDirection:"row",marginRight:10}}>
    {
         route.params.Projects.map((list) =>{
            return(
           
      <Card style={{width:144,height:175,alignItems:'center',paddingTop:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)",marginLeft:10}} key={list}>
      <Image source={require('../assets/1.png')}  style={{
                            height: 71,
                            width: 66,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>

      <Text style={{fontSize:15}}>{list}</Text>
      
      <Text style={{color:'#9A8B8B'}}>Some project description</Text>
      </Card>
     
        )
      })
    }
   
      </View>
      </ScrollView>
          
      </Card>
      </View>           
      </View>
      </ScrollView>
      </View>
      
  );
};
const styles=StyleSheet.create({
//   heading:{
//     fontSize:22,
//     fontWeight:'bold',
// },
header:{
  marginLeft:20,
  flexDirection:"row",
  marginTop:15
},
heading:{
  fontSize:20,
  fontWeight:'bold',
  marginLeft:15,
  marginTop:5
},
});