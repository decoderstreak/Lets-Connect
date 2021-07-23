import React, { Component } from 'react'
import {View,Text,Image,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import {Svg,Rect,Path} from 'react-native-svg'
import LinearGradient from 'react-native-linear-gradient';
import Back from '../assets/backarrow';
import firestore from '@react-native-firebase/firestore';
export default class Cards extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:[
                {
                 course: 'C',
                 colors:['#116faf','#2d9ed6', '#90bcda'],
                 img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FCl.png?alt=media&token=450bbe14-f519-4a3e-94f0-c46b3086972f',
                 index:0
                },
                {
                 course: 'C++',
                 colors:['#18ec84','#048046',],
                 img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FCpp.png?alt=media&token=16ddaaa6-05f0-47ba-ba6a-b57bfddf8f37',
                 index:1
                },
                {
                 course: 'JAVA',
                colors:['#ff0000','#750000',],
                img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FJava.png?alt=media&token=649c4db7-0be0-48e8-a835-aa73f7d12ff6',
                index:2
                },
                {
                 course: 'PYTHON',
                 colors:['#0da1fe','#c4e5f9'],
                 img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FPython.png?alt=media&token=6e2d60db-a309-4a48-b026-66fb5ada963e',
                 index:3
                },
            ],
                
            List:[]
           
        }
    } 
    componentDidMount=()=>{
        firestore()
        .collection('TESTTHREE')
        .doc('COURSE')
        .collection('PROGRAMMING')
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
            <View style={{flex:1}} >
                <View style={styles.header}>
                   <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Back />
                    </TouchableOpacity>
                 
                    <Text style={styles.heading}>Programming</Text></View>
              
                <ScrollView >
                    {/* ------------------------------------CARDS---------------------------------------------------------- */}
                <View style={{marginTop:10}}>     
                {
                        this.state.data.map((i)=>{
                            return(
                <View key={i.course}>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate('CourseSlider',
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