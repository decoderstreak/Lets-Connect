import React, { Component } from 'react'
import { View,Text ,Image, ImageBackground, TouchableOpacity} from 'react-native'
import {Svg,Path,Rect,Stop,Defs,LinearGradient} from 'react-native-svg'
import img6 from '../sadhana/circle1.png';
import img7 from '../sadhana/circle2.png';
import img8 from '../sadhana/circle3.png';
import img9 from '../sadhana/circle4.png';
import Slider from 'react-native-smooth-slider';
export default class Sadhana extends Component {
    state = {
        value: 0.2
      };
    
    render() {
        return (
           <View>
            <View style={{width:414,height:896,backgroundColor:'#faf7f2'}}>
                <View style={{marginLeft:20,marginTop:50}}> 
            <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect x="54.5" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 54.5 54.5)" fill="white" stroke="#EBEAEC"/>
<Path d="M20.5664 34.3574L34.2387 20.6853M20.735 20.6424C20.735 20.6424 29.2809 29.1884 34.433 34.3405L20.735 20.6424Z" stroke="#3F414E" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</Svg></View>

           <Image source={img6} style={{marginTop:-135,marginLeft:-50}}></Image>
           <Image source={img7} style={{marginTop:-150,marginLeft:158,opacity:0.6}}></Image>
           <Text style={{fontSize:26,marginTop:45,marginLeft:95}}>Sudarshan Kriya</Text>
           <Text style={{marginLeft:135,marginTop:8}}>7 DAYS OF CALM</Text>
          <TouchableOpacity style={{width:70,height:70,borderRadius:35,backgroundColor:'#3F414E',marginTop:55,marginLeft:150,borderColor:'#BABCC6',borderWidth:6}}>
              <Text style={{color:"white",marginTop:20,marginLeft:12,fontSize:14}}>start</Text>
          </TouchableOpacity>
           <View>
               <Slider 
               value={this.state.value}
               useNativeDriver={true}
               onValueChange={value => this.setState({ value })}
               style={{width:330,marginLeft:32,alignItems: "stretch",marginTop:15}}></Slider>
      </View>
      <Text style={{marginLeft:32,marginTop:-6}}>
         {this.state.value}
        </Text>
           <Image source={img8} style={{marginTop:-20,marginLeft:245,opacity:0.6}}></Image>
           <Image source={img6} style={{marginTop:-150,marginLeft:-150}}></Image>
            </View>
           </View>
        )
    }
}
