import React, { useState } from 'react'
import { Text, View,TouchableOpacity,Linking ,ScrollView} from 'react-native'
import StepIndicator from 'react-native-step-indicator' 
import Icon from 'react-native-ionicons';
 
const labels = [
    {
        label: 'Introduction',
        link:'https://www.youtube.com/watch?v=AKdfzGpydPU'
    },
    {
        label: 'Editors',
        link:'https://www.youtube.com/watch?v=p3XTZlZ6-xw',
    },
    {
        label: 'Basic',
        link:'https://www.youtube.com/results?search_query=gate+tutorials+for+ece+playlists',
    },
    {
        label: 'Tags',
        link:'https://www.youtube.com/watch?v=AKdfzGpydPU'
    },
    {
        label: 'Html css',
        link:'https://www.youtube.com/watch?v=p3XTZlZ6-xw',
    },
    {
        label: 'Html forms',
        link:'https://www.youtube.com/results?search_query=gate+tutorials+for+ece+playlists',
    },
    {
        label: 'Html graphics',
        link:'https://www.youtube.com/watch?v=AKdfzGpydPU'
    },
    {
        label: 'Html Media',
        link:'https://www.youtube.com/watch?v=p3XTZlZ6-xw',
    },
    {
        label: 'Basic Applications',
        link:'https://www.youtube.com/results?search_query=gate+tutorials+for+ece+playlists',
    }
]
const customStyles = {
  stepIndicatorSize: 20,
  currentStepIndicatorSize:25,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 1,
  stepStrokeCurrentColor: '#FFFFFF',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#FFFFFF',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#FFFFFF',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#FFFFFF',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#116FAF',
  stepIndicatorLabelFinishedColor: '#116FAF',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#FFFFFF'
}


function CourseSlider({route,navigation}){
    const [currentPosition,setCurrentposition]=useState(0);
    const l = route.params;
    {console.log(route.params,'testing');}
        return (
            <View style={{flex:1,backgroundColor:"#116FAF",}}>
                
              <View style={{ display:'flex',flexDirection:'row',marginTop:'10%'}}>
                  
                  <View>
                   
                      <TouchableOpacity>
              {/* <Icon name="arrow-back-circle-outline" size={48} color="white"style={{marginLeft:'18%'}}/> */}
              </TouchableOpacity>
              </View>
              <View>
              <Text style={{color:'#FFFFFF',fontSize:32}}>{route.params.name}</Text>
              </View>
              </View>
              <View style={{flex:1,marginLeft:'10%'}}>
        <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={l.info}
         direction={'vertical'}
         stepCount={route.params.info.length} 
         renderLabel={function (position, stepStatus, label, currentPosition){
            //  console.log(route.params.info.length)
            return (
                <View style={{marginLeft:'12%',marginTop:'2%'}}>
                       <ScrollView>
                <TouchableOpacity
                style={{width:180,height:30,borderRadius:5,backgroundColor:"#FFFFFF",}}
                onPress={() => {Linking.openURL(position.label.link)}
                // ,setCurrentposition(position.position)
                // console.log(position.label.link,'link broo')     
                } 
                >
               <Text
                style={{fontSize:16,color:'black',textAlign:'center',padding:'3%'}}>
                    {position.label.label}
                 {/* {route.params.info[0].position.label} */}
                </Text>
              </TouchableOpacity>
              </ScrollView>
              
              </View>
            )
    }}
    />   
    </View>    
    {/* <TouchableOpacity style={{alignSelf:"center"}} onPress={()=>Next()}>
        <Text style={{color:"#FFFFFF",fontSize:25}}>Next</Text>
    </TouchableOpacity> */}
            </View>
        )
    }

export default  CourseSlider