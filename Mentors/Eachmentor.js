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
export default function Mentor()
{
  return(
      <ScrollView>
    <View style={{marginTop:40,marginLeft:20,paddingBottom:20,flex:1}}>

      <View style={{alignItems:"center"}}>
      <Image source={require('../assets/Avatar.png')}  style={{
                            height: 120,
                            width: 120,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>  
                         
        </View> 
        <View style={{alignItems:'center',marginTop:10}}>
<Text style={{fontSize:22,color:'black'}}>B Sudharshan </Text>
<Text style={{color:'#9A8B8B',paddingLeft:35,paddingRight:25}}>Senior Software Engineer at WorkTImes 
                                               Cofounder of ENGAMES,Tech pro,full stack 
</Text>
  </View>
  <View style={{paddingTop:20}}>
  <Text style={{fontSize:18}}>Current Working Status</Text>
  <View style={{paddingTop:7}}>
  <Card style={{height:51,paddingTop:12,paddingLeft:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
<Text style={{fontSize:14,color:'#9A8B8B',}}>Pursuing PHD in Georgia Tech</Text>
  </Card>
  </View>
  </View>
  <View style={{paddingTop:20}}>
  <Text style={{fontSize:18}}>Skills</Text>
  <View style={{paddingTop:7}}>
  <Card style={{height:105,paddingTop:12,paddingLeft:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
<Text style={{fontSize:14,color:'#9A8B8B',}}>
In current job Action script 3.0/Flash, Php, Javascript, MySql, Redis,Node.js, Memcache
In previous jobs Ruby on Rails, Python,
Learnt as Hobby HTML, CSS, Jquery, Jquery Mobile,</Text>
  </Card>
  </View>
  </View>  
  <View style={{paddingTop:20}} >
      <Card style={{height:220,paddingTop:20,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}} containerStyle={{borderRadius:10,borderWidth:2,}}>
    <View style={{flexDirection:'row',justifyContent:'space-around' }}>
      <Card style={{width:144,height:175,alignItems:'center',paddingTop:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
      <Image source={require('../assets/1.png')}  style={{
                            height: 71,
                            width: 66,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>

      <Text style={{fontSize:18}}>Project Name</Text>
      
      <Text style={{color:'#9A8B8B'}}>Some project description </Text>
      </Card>
      <Card style={{width:144,height:175,alignItems:'center',paddingTop:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
      <Image source={require('../assets/1.png')}  style={{
                            height: 71,
                            width: 66,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>

      <Text style={{fontSize:18}}>Project Name</Text>
      
      <Text style={{color:'#9A8B8B'}}>Some project description </Text>
      </Card>
      </View>
      </Card>
      </View>           
      </View>
      </ScrollView>
  );
};
const styles=({
  
});