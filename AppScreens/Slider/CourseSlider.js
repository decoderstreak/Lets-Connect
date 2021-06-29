import React, { useState } from 'react'
import { Text, View,TouchableOpacity,Linking ,ScrollView} from 'react-native'
import StepIndicator from 'react-native-step-indicator' 
import Icon from 'react-native-ionicons';
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
// import Back from '../assets/backarrow';
import Back from '../../assets/backarrow'
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
  currentStepLabelColor: '#FFFFFF',
//   flex:1,
//   alignItems:'flex-start'
//   marginTop:20
}

function CourseSlider({route,navigation}){
    const [currentPosition,setCurrentposition]=useState(0);
    const l = route.params;
    
    
    // {console.log(route.params,'testing');}
        return (
           
                
            <View style={{flex:1,backgroundColor:"#116FAF",}}>
                
              <View style={{ display:'flex',flexDirection:'row'}}>
                  
                  <View>
                   
                      <TouchableOpacity onPress={()=>navigation.goBack()} style={{margin:20}}>
                          {/* <Back/> */}
                          <View>
                          <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<Rect x="39.5" y="39.5" width="39" height="39" rx="19.5" transform="rotate(-180 39.5 39.5)" stroke="white"/>
<Path d="M26.7993 20.7232L15.6884 20.7232L20.3516 25.5185L19.3512 26.5455L13.3647 20.4079C13.1442 20.1815 13.1442 19.8176 13.3647 19.5911L19.3512 13.4455L20.3516 14.4724L15.6884 19.2677L26.7993 19.2677L26.7993 19.9955L26.7993 20.7232Z" fill="white"/>
</Svg>
                          </View>
              {/* <Icon name="arrow-back-circle-outline" size={48} color="white"style={{marginLeft:'18%'}}/> */}
              </TouchableOpacity>
              </View>
              <View
            //    style={{justifyContent:'center',alignItems:'center'}}
               >
              <Text style={{color:'#FFFFFF',fontSize:20,fontWeight:'bold',margin:20}}>{route.params.name}</Text>
              </View>
              </View>
              <View 
              style={{flex:1,marginLeft:'10%'}}
              >
                  <ScrollView>
        <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={l.info}
         direction={'vertical'}
         stepCount={route.params.info.length} 
         renderLabel={function (position, stepStatus, label, currentPosition){
            //  console.log(position,'yyyyyy brooooo')
            return (
                <View 
                style={{marginTop:40,}}
                // style={{alignItems:'flex-end'}}
                // style={{marginLeft:'12%',margin:'5%'}}
                >
                       {/* <ScrollView> */}
                <TouchableOpacity
                style={{borderRadius:5,backgroundColor:"#FFFFFF"}}
                onPress={() => 
                    {Linking.openURL(position.label.link)}
                    // setCurrentposition(position.position)    
                 } 
                >
               <Text
                style={{fontSize:16,color:'black',textAlign:'center',padding:'3%',justifyContent:'space-around'}}>
                    {position.label.label}
                </Text>
              </TouchableOpacity>
              {/* </ScrollView> */}
              
              </View>
            )
    }}
    />
    </ScrollView>   
    </View>    
    {/* <TouchableOpacity style={{alignSelf:"center"}} onPress={()=>Next()}>
        <Text style={{color:"#FFFFFF",fontSize:25}}>Next</Text>
    </TouchableOpacity> */}
            </View>
        )
    }

export default  CourseSlider