import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class TestingThree extends Component {
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
        // console.log('Total users: ', querySnapshot.size);
    
        querySnapshot.forEach(documentSnapshot => {
        //   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
          this.state.List=documentSnapshot.data()
          this.setState({
              List:(this.state.List)
          })
        //   console.log('lists broo',this.state.List);
        });
    })
    }   
render() {
        return (
            <View>
                <Text> textInComponent </Text>
                {
Object.keys(this.state.List).map(i=>{
    console.log('...............',i)
return(
    <View>
    <Text>iiiiiiii{i}</Text>
    </View>
)
}),
Object.values(this.state.List).map(i=>{
    // console.log('/////',i);
    Object.values(i).map(j=>{
        // console.log(';;;;;;',j);
        Object.keys(j).map(k=>{
            console.log('========',k);
        })
        Object.values(j).map(k=>{
            console.log('------',k);
        })
    })
    
})
                }
            </View>
        )
    }
}
