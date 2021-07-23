import React, { Component } from 'react'
import {View,Text,Image,ScrollView,StyleSheet} from 'react-native'
import {Svg,Rect,Path} from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';
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
                img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FHtml.png?alt=media&token=45bf2733-365b-4387-a4f2-3c144e7b6f2d',
                index:3,
               },
               {
                course: 'CSS',
                colors:['#116faf','#2d9ed6', '#90bcda',],
                img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FCss.png?alt=media&token=684ce344-fc1f-4493-b17a-44440f4518e0',
                index:2
               },
               {
               course: 'BOOTSTRAP',
               colors:['#4701c1','#844adb',],
               img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FBoot.png?alt=media&token=e13a24e5-90bf-4a69-8fe9-ac3f15e31fb3',
               index:1
               },
               {
                course: 'JS',
                colors:['#f79b34','#fbd603'],
                img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FJs.png?alt=media&token=99df2eba-b4fc-4707-acc8-2af2b9c69a11',
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
                                    <Image source={{uri:i.img}} style={{width:70,height:65,marginTop:10,marginLeft:100}}></Image>
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
                        <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2Fact.png?alt=media&token=0199a039-4704-46ff-8b97-71eba10043f6'}} style={{width:145,height:145}}></Image>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CourseSlider',
                {info:this.state.List[0].FIELD,
                 name: 'AngularJS'})} >
                    <View style={{width:145,height:145,borderRadius:15,marginTop:15,marginLeft:21,backgroundColor:'black'}}>
                        <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FAngular.png?alt=media&token=6eb91229-d11f-42c8-9041-fec3f40f4c1e'}} style={{width:145,height:145}}></Image>
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