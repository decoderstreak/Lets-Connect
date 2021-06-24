import React, { Component } from 'react'
import {View,Text,Image,ScrollView,StyleSheet} from 'react-native'
import {Svg,Rect,Path} from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';
import img1 from '../Cards/Html.png'
import img2 from '../Cards/Css.png'
import img3 from '../Cards/Boot.png'
import img4 from '../Cards/Js.png'
import img5 from '../Cards/act.png'
import img6 from '../Cards/Angular.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           data:[]  
        }
    }
    
    componentDidMount=()=>{
        database()
        .ref('/Courses/Web Development')
        .once('value')
        .then(snapshot => {
          console.log('User data: ', snapshot.val());
          this.setState({
              data:snapshot.val()
          })
          console.log('list data',Object.keys(this.state.data));
        });
    }
    render() {
        return (
              <View >
                <View style={{ marginTop: 20, marginLeft: 10 ,flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="55.2611" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 55.2611 54.5)" stroke="#EBEAEC" />
                        <Path d="M37.6102 28.5L22.334 28.5L28.7453 35.0889L27.3699 36.5L19.1392 28.0667C18.8359 27.7556 18.8359 27.2556 19.1392 26.9444L27.3699 18.5L28.7453 19.9111L22.334 26.5L37.6102 26.5L37.6102 27.5L37.6102 28.5Z" fill="#3F414E" />
                    </Svg>
                    </TouchableOpacity>
                    <View style={{margin:20,flexDirection:'row',marginTop:10}}>
                    <Text style={styles.heading}>Web Development</Text>
                    </View>
                </View>
               
                <ScrollView style={{height:560}}>
                    {/* ------------------------------------CARDS---------------------------------------------------------- */}
                <View>
                    {
                        Object.keys(this.state.data).map((i)=>{
                            return(
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#E65100','#FA500C', '#FB743E', '#FC9870','#FDAA89',]} style={{ width: 330, height: 80, borderRadius: 20, margin:10 }}>
                                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                        <Text style={{color:'white',fontSize:22,justifyContent:'center',alignItems:'center',marginLeft:80}}>{i}</Text>
                                        <Image source={img1} style={{width:70,height:65,marginTop:10,marginLeft:100}}></Image>
                                    </View>
                                </LinearGradient>
                            )

                        })
                    }
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#116faf','#2d9ed6', '#90bcda',]} style={{ width: 330, height: 80, borderRadius: 20, margin:10 }}>
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{color:'white',fontSize:22,justifyContent:'center',alignItems:'center',marginLeft:70}}>CSS</Text>
                        <Image source={img2} style={{width:60,height:65,marginTop:10,marginLeft:120}}></Image>
                    </View>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4701c1','#844adb',]} style={{ width: 330, height: 80, borderRadius: 20, margin:10 }}>
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{color:'white',fontSize:22,justifyContent:'center',alignItems:'center',marginLeft:50}}>BOOTSTRAP</Text>
                        <Image source={img3} style={{width:70,height:65,marginTop:10,marginLeft:70}}></Image>
                    </View>
                </LinearGradient>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#f79b34','#fbd603']} style={{ width: 330, height: 80, borderRadius: 20, margin:10 }}>
                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                        <Text style={{color:'white',fontSize:22,justifyContent:'center',alignItems:'center',marginLeft:80}}>JS</Text>
                        <Image source={img4} style={{width:70,height:65,marginTop:10,marginLeft:130}}></Image>
                    </View>
                </LinearGradient>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:145,height:145,borderRadius:10,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={img5} style={{width:145,height:145}}></Image>
                    </View>
                    <View style={{width:145,height:145,borderRadius:10,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={img6} style={{width:145,height:145}}></Image>
                    </View>
                </View>                
                </View>
                </ScrollView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    heading:{
        fontSize:22,
        fontWeight:'bold'
},
})