import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class TestButtons extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             List:[],
             data:[]
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
       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
       this.state.List=this.state.List.concat(documentSnapshot.data())
       this.setState({
           List:(this.state.List)
       })
       console.log(this.state.List[0].FIELD);
     });
 })
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="HTML" onPress={()=>this.props.navigation.navigate('CourseSlider',
                {info:this.state.List[3].FIELD })
                    // this.state.List[0]
                    // Object.keys()
                    // data:this.state.List[2],
                //     info:[
                //         {
                //             label: 'Introduction',
                //             link:'https://www.youtube.com/watch?v=AKdfzGpydPU'
                //         },
                //         {
                //             label: 'Editors',
                //             link:'https://www.youtube.com/watch?v=p3XTZlZ6-xw',
                //         },
                //         {
                //             label: 'Basic',
                //             link:'https://www.youtube.com/results?search_query=gate+tutorials+for+ece+playlists',
                //         },
                //         {
                //             label: 'Tags',
                //             link:'https://www.youtube.com/watch?v=AKdfzGpydPU'
                //         },
                //         {
                //             label: 'Html css',
                //             link:'https://www.youtube.com/watch?v=p3XTZlZ6-xw',
                //         },
                //         {
                //             label: 'Html forms',
                //             link:'https://www.youtube.com/results?search_query=gate+tutorials+for+ece+playlists',
                //         },
                //         {
                //             label: 'Html graphics',
                //             link:'https://www.youtube.com/watch?v=AKdfzGpydPU'
                //         },
                //         {
                //             label: 'Html Media',
                //             link:'https://www.youtube.com/watch?v=p3XTZlZ6-xw',
                //         },
                //         {
                //             label: 'Basic Applications',
                //             link:'https://www.youtube.com/results?search_query=gate+tutorials+for+ece+playlists',
                //         }
                //     ]
               
                    }/>
                <Button title="CSS" onPress={()=>this.props.navigation.navigate('CourseSlider',{data:this.state.List[1]})}/>
                <Button title="BOOTSTRAP" onPress={()=>this.props.navigation.navigate('CourseSlider',{title:"BOOTSTRAP",data:this.state.List[0]})}/>
                <Button title="JS" onPress={()=>this.props.navigation.navigate('CourseSlider',{title:"JS",data:this.state.List[3]})}/>
            </View>
        )
    }
}
