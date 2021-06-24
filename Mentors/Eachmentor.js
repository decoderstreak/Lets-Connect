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
export default function Mentor({route,navigation})
{
  list=()=>{
   console.log('in each mentor broo', (route.params.list.Name))
  }
  // var list=navigation.getParam('list'),
  return(
    <View style={{
      marginLeft:20,
      marginTop:20,
      // margin:20,
      flexDirection:'column'
      }}>
                <View style={{ flexDirection:'row'}}>
                   <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="55.2611" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 55.2611 54.5)" stroke="#EBEAEC" />
                        <Path d="M37.6102 28.5L22.334 28.5L28.7453 35.0889L27.3699 36.5L19.1392 28.0667C18.8359 27.7556 18.8359 27.2556 19.1392 26.9444L27.3699 18.5L28.7453 19.9111L22.334 26.5L37.6102 26.5L37.6102 27.5L37.6102 28.5Z" fill="#3F414E" />
                    </Svg>
                    </TouchableOpacity>
                    <View style={{margin:20,flexDirection:'row',marginTop:10}}>
                    <Text style={styles.heading}>Mentor</Text></View>
                </View>
              {list()}
    {/* ---------------------------------------------------Header---------------------------------------------------------- */}
      
      <ScrollView>
    <View style={{marginTop:40,paddingBottom:20,flex:1}}>

      <View style={{alignItems:"center"}}>
      <Image source={require('../assets/Avatar.png')}  style={{
                            height: 120,
                            width: 120,
                            
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>  
                         
        </View> 
        <View style={{alignItems:'center',marginTop:10}}>
<Text style={{fontSize:22,color:'black'}}>{route.params.list.Name}</Text>
<Text style={{color:'#9A8B8B'}}>
  {route.params.list.Edu}
  {/* Senior Software Engineer at WorkTImes 
                                               Cofounder of ENGAMES,Tech pro,full stack  */}
</Text>
  </View>
  <View style={{paddingTop:20}}>
  <Text style={{fontSize:18}}>Current Working Status</Text>
  <View style={{paddingTop:7}}>
  <Card style={{height:51,paddingTop:12,paddingLeft:10,borderWidth:1,borderColor:"rgba(201, 201, 201, 1)"}}>
<Text style={{fontSize:14,color:'#9A8B8B',}}>{route.params.list.Status}</Text>
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
      </View>
      // {/* </Text> */}
      // {/* // </View> */}
  );
};
const styles=StyleSheet.create({
  heading:{
    fontSize:22,
    fontWeight:'bold',
    // marginLeft:10
}
});