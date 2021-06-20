
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Touchable,
  TextInput,
  Image,
} from 'react-native';
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
import {Card} from 'react-native-elements';
// import {Card} from 'react-native-shadow-cards';
import img1 from '../assets/Avatar.png'
export default class Mentors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
                    Mentors : [
                        {
                            id:1,
                            img:img1,
                            Name:"Bhavya",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                        },
                        {
                            id:2,
                            img:img1,
                            Name:"Divya",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                        },
                        {
                            id:3,
                            img:img1,
                            Name:"Tejeswini",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                        },
                        {
                            id:4,
                            img:img1,
                            Name:"Supraja",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                            
                        },
                        {
                            id:4,
                            img:img1,
                            Name:"Supraja",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                            
                        },
                        {
                            id:4,
                            img:img1,
                            Name:"Hari",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                            
                        },
                        {
                            id:4,
                            img:img1,
                            Name:"Bharavi",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"divya@123"
                            
                        },
                        
                        
                    ]
        };
      }


    render(){
    return(


      <ScrollView>
            <View style= {{flex:1,backgroundColor:"white",marginBottom:20}}>
         {
                  this.state.Mentors.map((l) =>{
                      return(
                        <Card  containerStyle={{borderRadius:10,borderWidth:2,}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

      <View style={{paddingTop:15}}>
      <Image source={l.img} style={styles.img} />
      </View>
        
      <View style={{paddingTop:5}}> 
      <Text style={{fontSize:25}}>{l.Name}</Text>
      <Text style={{color:'#9B9B9B'}}>{l.Year}</Text>
      <Text style={{color:'#9B9B9B'}}>{l.position}</Text>
      <Text style={{color:'#9B9B9B'}}>{l.Email}</Text>
      </View> 


      <View style={{marginTop:40}}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#116FAF"/>
        </Svg>
        </View>

        </View>
      </Card>
                      )
                        })
                    }
    </View>
    </ScrollView>

  );
};
}
const styles=({
  img :{
    width:65,
    height:65,
    

},
});