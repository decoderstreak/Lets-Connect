import React, { Component } from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import elipse from '../Welcome/Ellipse.png'
import bird from '../Welcome/Vector.png'
export default class Welcome extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#212770', width:414,height:896}}>
                <View  style={{marginTop:132,marginLeft:50.5}}>
                    <Text style={{color:'white',fontSize:30}}>Hi Cleo , Welcome to</Text> 
                    <Text style={{color:'white',fontSize:30,marginLeft:50,marginTop:4}}>let’s connect</Text>
                </View>
                <View style={{marginTop:29,marginLeft:20}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'200'}}>Explore the app, Find  your interest in specific</Text>
                    <Text style={{color:'white',fontSize:16,fontWeight:'200',marginLeft:65,marginTop:5}}> technology and dive into it.</Text>
                </View>
                <View>
                <View style={{height:6,width:6,borderRadius:6,backgroundColor:"#a6adfb",marginTop:45,marginLeft:27}}></View>
                    <View style={{height:12,width:12,borderRadius:12,backgroundColor:"#a6adfb",marginLeft:33,marginTop:4}}></View>
                </View>
                <View><Image source={bird} style={{marginTop:11,marginLeft:237}}></Image></View>
                <View><Image source={bird} style={{marginLeft:37,width:22,height:8}}></Image></View>
                <View><Image source={elipse} style={{width:350,height:200,marginTop:-10,marginLeft:20}}></Image></View>
                <View style={{backgroundColor:"#181E65",height:256,width:416,marginTop:5,justifyContent:"center"}}>
                    <TouchableOpacity style={{width:360,height:63,borderRadius:38,backgroundColor:"#EBEAEC",marginLeft:16,marginTop:-19}}>
                        <Text style={{marginLeft:140,marginTop:25,fontSize:14}}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:80,marginLeft:138}}>
                 <TouchableOpacity style={{width:143,height:5,borderRadius:5,backgroundColor:"#E6E6E6"}}></TouchableOpacity>
                </View>
            </View>
        )
    }
}
