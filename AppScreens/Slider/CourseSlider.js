import React, { useState } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import StepIndicator from 'react-native-step-indicator'
// import { Ionicons } from '@expo/vector-icons'; 
import Icon from 'react-native-ionicons';
 
const labels = ['Introduction','Editors','Basic','Tags','Html css',
'Html forms','Html graphics','Html Media','Basic Applications',
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
    const [Array, setArray] = useState([])
    // const Next = () =>{
    //     setCurrentposition(currentPosition+1);
    // }
    console.log(route.params.data.FIELD);
    {
        Object.values(route.params.data.FIELD).map(i=>{
            // console.log('cccc',i)
            return(
                <View>
                    {Object.keys(i).map(j=>{
                        // console.log('fff',j);
                        // setArray(j)
                        // console.log('j boss',Array);
                      //   return(
                      //       <StepIndicator
                      //       direction={'vertical'}/>
                      //   )
                    })}
                </View>
            )
        })
    }
        return (
            <View style={{flex:1,backgroundColor:"#116FAF",}}>
                
              <View style={{ display:'flex',flexDirection:'row',marginTop:'10%'}}>
                  <View>
                      <TouchableOpacity>
              {/* <Icon name="arrow-back-circle-outline" size={48} color="white"style={{marginLeft:'18%'}}/> */}
              </TouchableOpacity>
              </View>
              <View>
              <Text style={{color:'#FFFFFF',fontSize:32}}>{route.params.data.LANG}</Text>
              </View>
              </View>
              <View style={{flex:1,marginLeft:'10%'}}>
             
         <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={labels}
         direction={'vertical'}
         stepCount={route.params.data.FIELD.length} 
         renderLabel={function (position, stepStatus, label, currentPosition){
         
            return (
                <View style={{marginLeft:'12%',marginTop:'2%'}}>
                <TouchableOpacity
                style={{width:130,height:30,borderRadius:5,backgroundColor:"#FFFFFF",}}
                onPress={()=>  setCurrentposition(position.position)}
                >
               <Text
                style={{fontSize:16,color:'black',textAlign:'center',padding:'3%'}}>
                 { position.label}
                </Text>
              </TouchableOpacity>
              
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