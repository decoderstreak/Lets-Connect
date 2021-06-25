import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class TestButtons extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
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
       console.log('lists broo',this.state.List[1]);
       
     });
 })
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="HTML" onPress={()=>this.props.navigation.navigate('CourseSlider',{data:this.state.List[2]})}/>
                <Button title="CSS" onPress={()=>this.props.navigation.navigate('CourseSlider',{data:this.state.List[1]})}/>
                <Button title="BOOTSTRAP" onPress={()=>this.props.navigation.navigate('CourseSlider',{title:"BOOTSTRAP",data:this.state.List[0]})}/>
                <Button title="JS" onPress={()=>this.props.navigation.navigate('CourseSlider',{title:"JS",data:this.state.List[3]})}/>
            </View>
        )
    }
}
