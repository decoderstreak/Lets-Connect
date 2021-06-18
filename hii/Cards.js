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
export default function Cards()


{
  return(
    <View style={styles.main}>
      <Card style={{width:'95%',height:140,}}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{paddingTop:40}}>
      <Image source={require('../assets/p.png')}  style={{
                            height: 50,
                            width: 50,
                           
                            backgroundColor: "#ddd",
                            borderRadius: 50}}resizeMode="cover"/>  
        </View>
      <View style={{paddingTop:20}}> 
      <Text style={{fontSize:25}}>BHAVYA</Text>
      <View >
      <Text style={{color:'#9B9B9B'}}>3rd year ECE</Text>
      <Text style={{color:'#9B9B9B'}}>mean stack developer</Text>
      <Text style={{color:'#9B9B9B'}}>bavya@gmail.com</Text>
      </View>
      </View> 
      <View style={{paddingTop:55}}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#116FAF"/>
</Svg>
</View>
</View>
      </Card>
    </View>

  );
};
const styles=({
  main:{
    flex:1,
    marginLeft:20,
    marginTop:30,
    

    
  },
});