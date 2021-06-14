import React, { Component } from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView} from 'react-native'
import elipse from './ellipse.png'
import bird from './Vector.png'
import auth from '@react-native-firebase/auth';
export default class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
             uid:' '
        }
    }
    render() {
        this.state = { 
            displayName: auth().currentUser.displayName,
            uid: auth().currentUser.uid
          }   
        return (
            <View style={{backgroundColor:'#116faf'}}>
                <ScrollView style={{height:650}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                    <View  style={{marginTop:50,alignItems:'center',justifyContent:'center',width:250}}>
                    <Text style={{color:'white',fontSize:20,alignContent:'center',justifyContent:'center'}}>Hi {this.state.displayName} ,</Text> 
                    <Text style={{color:'white',fontSize:20,marginTop:4,alignItems:'center',justifyContent:'center'}}> Welcome to let’s connect</Text>
                    </View>
                    </View>
                <View style={{marginTop:29,alignItems:'center',justifyContent:'center'}}>
                    <Text style={{color:'white',fontSize:16,fontWeight:'200'}}>Explore the app, Find  your interest in specific</Text>
                    <Text style={{color:'white',fontSize:16,fontWeight:'200',marginTop:5}}> technology and dive into it.</Text>
                </View>
                <View>
                <View style={{height:6,width:6,borderRadius:6,backgroundColor:"#a6adfb",marginTop:45,marginLeft:27}}></View>
                    <View style={{height:12,width:12,borderRadius:12,backgroundColor:"#a6adfb",marginLeft:33,marginTop:4}}></View>
                </View>
                <View><Image source={bird} style={{marginTop:11,marginLeft:237}}></Image></View>
                <View><Image source={bird} style={{marginLeft:37,width:22,height:8}}></Image></View>
                <View style={{alignItems:'center'}}><Image source={elipse} style={{width:350,height:200,marginTop:-10}}></Image></View>
                <View style={{backgroundColor:"116faf",height:256,width:416,marginTop:5,justifyContent:"center"}} >
                    <TouchableOpacity style={{width:360,height:63,borderRadius:38,backgroundColor:"#EBEAEC",marginTop:10,alignItems:'center',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Tabnav')}>
                        <Text style={{fontSize:14,alignItems:'center',justifyContent:'center'}}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        )
    }
}
