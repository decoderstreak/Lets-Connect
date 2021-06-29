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
import Back from '../assets/backarrow';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           data:[
               {
                course: 'HTML',
                colors:['#E65100','#FA500C', '#FB743E', '#FC9870','#FDAA89',],
                img:img1,
                index:3,
               },
               {
                course: 'CSS',
                colors:['#116faf','#2d9ed6', '#90bcda',],
                img:img2,
                index:2
               },
               {
               course: 'BOOTSTRAP',
               colors:['#4701c1','#844adb',],
               img:img3,
               index:1
               },
               {
                course: 'JS',
                colors:['#f79b34','#fbd603'],
                img:img4,
                index:4
               },
           ],
           List:[]  
        }
    }
    componentDidMount=()=>{
        firestore()
        .collection('TESTTHREE')
        .doc('COURSE')
        .collection('WEBDEVELOPMENT')
        .get()
        .then(querySnapshot => {
        //  console.log('Total users: ', querySnapshot.size);
     
         querySnapshot.forEach(documentSnapshot => {
        //    console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
           this.state.List=this.state.List.concat(documentSnapshot.data())
           this.setState({
               List:(this.state.List)
           })
        //    console.log(this.state.List[0].FIELD);
         });
     })
        }
    render() {
        return (        
              <View style={{flex:1}}>  
                  <View style={styles.header}>
                   <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Back />
                    </TouchableOpacity> 
                    <Text style={styles.heading}>Development</Text></View>
                <ScrollView >
                    {/* ------------------------------------CARDS---------------------------------------------------------- */}
                    {
                        this.state.data.map((i)=>{
                            return(

                <View style={{marginTop:10}} key={i.course} >
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CourseSlider',
                {info:this.state.List[i.index].FIELD,
                 name: i.course})}>   
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={i.colors} style={{ width: 330, height: 80, borderRadius: 15, margin:10 }}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{color:'white',fontSize:22,position:"absolute",marginLeft:60,marginTop:20,alignContent:"center"}}>{i.course}</Text>
                                    <View style={{marginLeft:150}}>
                                    <Image source={i.img} style={{width:70,height:65,marginTop:10,marginLeft:100}}></Image>
                                    </View>
                                </View>
                            </LinearGradient>
                            </TouchableOpacity>            
                </View>
                            )
                        })
    }
                  
                  <View style={{flexDirection:'row'}}>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('CourseSlider',
                {info:this.state.List[5].FIELD,
                 name: 'ReactJS'})}>
                    <View style={{width:145,height:145,borderRadius:15,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={img5} style={{width:145,height:145}}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CourseSlider',
                {info:this.state.List[0].FIELD,
                 name: 'AngularJS'})} >
                    <View style={{width:145,height:145,borderRadius:15,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={img6} style={{width:145,height:145}}></Image>
                    </View>
                    </TouchableOpacity>
                </View>   
                </ScrollView>
    
            </View>
            
                  
        )
    }
}
const styles=StyleSheet.create({

heading:{
    fontSize:22,
    fontWeight:'bold',
    marginLeft:15,
    marginTop:5
  },
  header:{
    marginLeft:20,
    flexDirection:"row",
    marginTop:15
  },
})