import React, { Component } from 'react'
import {View,Text,Image,ScrollView} from 'react-native'
import {Svg,Rect,Path} from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';
import img1 from '../Cards/Html.png'
import img2 from '../Cards/Css.png'
import img3 from '../Cards/Boot.png'
import img4 from '../Cards/Js.png'
import img5 from '../Cards/act.png'
import img6 from '../Cards/Angular.png'
export default class Cards extends Component {
    render() {
        return (
<View style={{ width: 414, height: 896, backgroundColor: 'white' }}>
                <View style={{ marginTop: 40, marginLeft: 20 }}>
                    <Svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="55.2611" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 55.2611 54.5)" stroke="#EBEAEC" />
                        <Path d="M37.6102 28.5L22.334 28.5L28.7453 35.0889L27.3699 36.5L19.1392 28.0667C18.8359 27.7556 18.8359 27.2556 19.1392 26.9444L27.3699 18.5L28.7453 19.9111L22.334 26.5L37.6102 26.5L37.6102 27.5L37.6102 28.5Z" fill="#3F414E" />
                    </Svg>
                    <Text style={{ marginLeft: 70, marginTop: -40, fontSize: 24 }}>Web Development</Text>
                </View>
                <ScrollView>
                <View>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#E65100','#FA500C', '#FB743E', '#FC9870','#FDAA89',]} style={{ width: 370, height: 100, borderRadius: 20, marginLeft: 11, marginTop: 45 }}>
                    <Text style={{color:'white',fontSize:24,marginLeft:75,marginTop:35}}>HTML</Text>
                    <Image source={img1} style={{marginTop:-56,marginLeft:250,width:110,height:85}}></Image>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#116faf','#2d9ed6', '#90bcda',]} style={{ width: 370, height: 100, borderRadius: 20, marginLeft: 11, marginTop: 18 }}>
                    <Text style={{color:'white',fontSize:24,marginLeft:75,marginTop:33}}>CSS</Text>
                    <Image source={img2} style={{marginTop:-54,marginLeft:270,width:75,height:85}}></Image>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4701c1','#844adb',]} style={{ width: 370, height: 100, borderRadius: 20, marginLeft: 11, marginTop: 18 }}>
                    <Text style={{color:'white',fontSize:24,marginLeft:50,marginTop:33}}>BOOTSTRAP</Text>
                    <Image source={img3} style={{marginTop:-54,marginLeft:265,width:85,height:85}}></Image>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f79b34','#fbd603']} style={{ width: 370, height: 100, borderRadius: 20, marginLeft: 11, marginTop: 18 }}>
                    <Text style={{color:'white',fontSize:24,marginLeft:78,marginTop:33}}>JS</Text>
                    <Image source={img4} style={{marginTop:-56,marginLeft:270,width:85,height:95}}></Image>
                </LinearGradient>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:160,height:160,borderRadius:10,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={img5} style={{width:160,height:160}}></Image>
                    </View>
                    <View style={{width:160,height:160,borderRadius:10,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={img6} style={{width:160,height:160}}></Image>
                    </View>
                </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}
