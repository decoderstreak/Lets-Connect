import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Text, View ,TouchableOpacity} from 'react-native'
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
// import { Feather } from '@expo/vector-icons'; 
import { Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';

 const carddata=[
     {
        paragraph: 'Q: Hey cleo! Can you clarity my doubt related to react native..?I was confused what to choose in developing components whether Functional or class components...?'
     },
     {
         paragraph:'Q: Hey cleo! Can you clarity my doubt related to react native..? I was confused what to choose in developing components whether Functional or class components...?'
     },
     {
        paragraph:'Q: Hey cleo! Can you clarity my doubt related to react native..? I was confused what to choose in developing components whether Functional or class components...?'
     },
     {
        paragraph:'Q: Hey cleo! Can you clarity my doubt related to react native..? I was confused what to choose in developing components whether Functional or class components...?'
     },
     {
        paragraph:'Q: Hey cleo! Can you clarity my doubt related to react native..? I was confused what to choose in developing components whether Functional or class components...?'
     },
     {
        paragraph:'Q: Hey cleo! Can you clarity my doubt related to react native..? I was confused what to choose in developing components whether Functional or class components...?'
     }
]
 class DiscussTech extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
          Questions:[] ,
          info:[],   
         }
     }
     
     componentDidMount=()=>{
         firestore()
         .collection('Discussion')
         .doc('Non-Technical')
         .collection('Nontech fields')
         .doc('Meditation')
         .get()
         .then(querySnapshot => {
         
          var k=querySnapshot.data().answers.length
          for(var i=0;i<k;i++ )
          {
              this.state.info=this.state.info.concat(querySnapshot.data().answers[i])
              this.state.Questions=this.state.Questions.concat(querySnapshot.data().answers[i].question.question)
              this.setState({
                  Questions:this.state.Questions,
                  info:this.state.info
              })
            console.log('Total users: ', querySnapshot.data().answers[i]);
          }
          console.log('this.state.info:',this.state.info);
          console.log('this.state.Questions: ', this.state.Questions);
     })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'flex-start',backgroundColor:'white' }}>
               
               <ScrollView>
            <View style={{marginTop:20,overflow:'hidden'}}>
               { this.state.info.map((u,i) =>
                {
                    console.log('u/././',u.answers.length);
                    return(
                    <Card key={i} style={{borderRadius:10,width:320,marginLeft:20,elevation:8,shadowColor:'#C9C9C9',
                    margin:12,borderWidth:1.4
                }}>
                    <Paragraph style={{marginLeft:'4%',marginTop:'4%',color:'#9A8B8B',fontSize:14,
                     lineHeight: 14,
                    }}>{u.question.question}
{/* ------------------------------------comment icon----------------------------------------------------------------- */}
                    {/* <View>
<Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<Rect width="24" height="24" fill="url(#pattern0)"/>
<Defs>
<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use xlink:href="#image0" transform="scale(0.015625)"/>
</Pattern>
<Image id="image0" width="64" height="64" xlink:href="data:image/png;base64,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"/>
</Defs>
</Svg>
                    </View> */}
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("AnswersTech",{params:u})}}>
                        <Text 
                        style={{
                            color:'#116FAF',
                            marginLeft:200,
                            // marginTop:-20,
                            textDecorationLine:'underline',
                            fontSize:13
                        }}>
                        {u.answers.length} See all answers
                        </Text>
                    </TouchableOpacity>
                    </Paragraph>
                    </Card>
                    );
                  })
                }
            </View>
            </ScrollView>
            <View style={{height:75,backgroundColor:'white'}}>
                <TouchableOpacity style={{width:320,height:50,backgroundColor:'#116FAF',marginTop:20,marginLeft:20,borderRadius:10,borderWidth:1,borderColor:'white',elevation:3}}>
                   <View style={{flexDirection:'row'}}>
                    <TextInput style={{ color:'white',
                    // ,marginLeft:'5%',marginTop:'4%',
                    fontSize:14}} placeholder="Type Here...."></TextInput>
                    <TouchableOpacity>
                        <Text>
                            File 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                              Image
                        </Text>
                    </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>

            </View>
        )
    }
}
export default DiscussTech

