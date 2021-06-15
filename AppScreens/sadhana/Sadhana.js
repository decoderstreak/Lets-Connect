import React, { Component } from 'react'
import { View,Text ,Image, ImageBackground, TouchableOpacity,ScrollView} from 'react-native'
import {Svg,Path,Rect,Stop,Defs,LinearGradient} from 'react-native-svg'
import img6 from './circle1.png';
import img7 from './circle2.png';
import img8 from './circle3.png';
import img9 from './circle4.png';
import Slider from 'react-native-smooth-slider';
export default class Sadhana extends Component {
    state = {
        value: 0.2
      };
    
    render() {
        return (
            // <ScrollView>
           <View>
               {/* -------------------------------------------X mark-------------------------------------- */}
            <View style={{width:414,height:896,backgroundColor:'#faf7f2'}}>
            <View style={{marginLeft:20,marginTop:50}}> 
            <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Rect x="54.5" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 54.5 54.5)" fill="white" stroke="#EBEAEC"/>
            <Path d="M20.5664 34.3574L34.2387 20.6853M20.735 20.6424C20.735 20.6424 29.2809 29.1884 34.433 34.3405L20.735 20.6424Z" stroke="#3F414E" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg></View>

           {/* -------------------------------------------back ground -1-------------------------------------- */}
           {/* <View>
           <Svg width="234" height="319" viewBox="0 0 234 319" fill="none" xmlns="http://www.w3.org/2000/Svg">
<Path d="M188.24 -58.05C186.51 -64.28 181.72 -88.11 177.92 -117.42C174.8 -141.58 193.56 -163 217.91 -163H231.81C254.15 -163 272.24 -144.84 272.14 -122.5C271.64 -8.82001 268.38 164.09 257.95 178.74C249.23 190.98 239.6 216.01 233.06 235.44C225.28 258.53 211.68 279.29 193.3 295.28C192.75 295.76 192.2 296.23 191.66 296.68C180.02 306.48 165.9 312.9 150.91 315.5C30.8498 336.3 0.249838 251.36 0.149838 203.13C0.149838 202.27 0.119838 201.41 0.0698377 200.55C-1.34016 172.93 18.0598 113.12 107.69 84.52C198.75 55.48 199.34 -22.63 188.24 -58.05Z" fill="url(#paint0_linear)"/>
<Defs>
<LinearGradient id="paint0_linear" x1="26.659" y1="266.563" x2="424.503" y2="-258.07" gradientUnits="userSpaceOnUse">
<Stop offset="0.0001" StopColor="#418BBD"/>
<Stop offset="0.0002" StopColor="#247AB5"/>
<Stop offset="0.0003" StopColor="#3584BA"/>
<Stop offset="0.671875" StopColor="#FAF7F2" Stop-opacity="0.370022"/>
<Stop offset="0.927083" StopColor="#116FAF"/>
<Stop offset="1" StopColor="#F2EDE4" Stop-opacity="0"/>
</LinearGradient>
</Defs>
</Svg>
           </View> */}
           <Image source={img6} style={{marginTop:-135,marginLeft:-50}}></Image>
           <Image source={img7} style={{marginTop:-200,marginLeft:158,opacity:0.6}}></Image>
           <Text style={{fontSize:26,marginTop:5,marginLeft:95}}>Sudarshan Kriya</Text>
           <Text style={{marginLeft:135,marginTop:5}}>7 DAYS OF CALM</Text>
          <TouchableOpacity style={{width:70,height:70,borderRadius:35,backgroundColor:'#3F414E',marginTop:5,marginLeft:150,borderColor:'#BABCC6',borderWidth:6}}>
              <Text style={{Color:"white",marginTop:20,marginLeft:12,fontSize:14}}>start</Text>
          </TouchableOpacity>
           <View>
               <Slider 
               value={this.state.value}
               useNativeDriver={true}
               onValueChange={value => this.setState({ value })}
               style={{width:330,marginLeft:15,alignItems: "stretch",marginTop:15}}></Slider>
      </View>
      <Text style={{marginLeft:32,marginTop:-6}}>
         {this.state.value}
        </Text>
           <Image source={img8} style={{marginTop:-20,marginLeft:215,opacity:0.6}}></Image>
           <Image source={img6} style={{marginTop:-200,marginLeft:-50}}></Image>
            </View>
           </View>
        //    {/* </ScrollView> */}
        )
    }
}



