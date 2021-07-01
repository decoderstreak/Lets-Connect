import React, { Component } from 'react'
import { Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class TestingFour extends Component {
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
       console.log('lists broo',this.state.List);
     });
 })
    }   
render() {
        return (
            <View>
                <Text> textInComponent </Text>
{
Object.values(this.state.List).map((i)=>{
    // console.log('...............',i)
return(
    <View>
        {/* <Text>hiiiiiiiiiii</Text> */}
        {
    Object.keys(i).map((j)=>{
        // console.log(']]]]]]]]]]]]]',j)
        return(
            <View>
                <Text>{j}</Text>
            </View>
        )
    })
}
{
    Object.values(i).map((k)=>{
        // console.log(')))))))))))))))',k);
        return(
            <View>
                {/* <Text>broooo</Text> */}
                {
                    Object.values(k).map((l)=>{
                        // console.log('$$$$$$$$$$$$$$',l);
                        return(
                            <View>
                                {/* <Text>sisssssssssssssss</Text> */}
                                {
                                    Object.keys(l).map((p)=>{
                                        // console.log('%%%%%%%%%%',p);
                                        return(
                                            <View>
                                                <Text>{p}</Text>
                                            </View>
                                        )
                                    })
                                }
                                {
                                    Object.values(l).map((p)=>{
                                        // console.log('&&&&&&&&&&&&&&&&&&&',p)
                                        return(
                                            <View>
                                                <Text>{p}</Text>
                                            </View>
                                        )
                                        
                                    })
                                }
                            </View>
                        )
                    })
                }
            </View>
        )
    })
}
    </View>
//     <View style={{height:100,width:100,backgroundColor:'pink'}}>
//     <Text style={{backgroundColor:'pink',fontSize:40}}>iiiiiiii{i}</Text>
//     </View>
)
})
}
{
// Object.values(this.state.List).map(i=>{
//     console.log('/////',i);
//     Object.values(i).map(j=>{
//         // console.log(';;;;;;',j);
//         Object.keys(j).map(k=>{
//             console.log('========',k);
//             return(
//                 <View>
//                     <Text>hiiii</Text></View>
//             )
//         })
//         Object.values(j).map(k=>{
//             console.log('------',k);
//         })
//     })
    
// })
                }
            </View>
        )
    }
}
