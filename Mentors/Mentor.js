
import React from 'react';
// import {Svg,Rect,Path} from 'react-native-svg'
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
                            Email:"bhavya@123"
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
                            Name:"Supraja",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"supraja@123"
                            
                        },
                        {
                            id:5,
                            img:img1,
                            Name:"Hari",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"hari@123"
                            
                        },
                        {
                            id:6,
                            img:img1,
                            Name:"Bhargavi",
                            Year: '2023',
                            position:"Mean Stack Developer",
                            Email:"bhargavi@123"
                            
                        },
                        
                        
                    ]
        };
      }


    render(){
    return(
<View style={{backgroundColor:'white'}}>
<View style={{ flexDirection:'row',margin:10}}>
                   <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Svg width="56" height="55" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Rect x="55.2611" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 55.2611 54.5)" stroke="#EBEAEC" />
                        <Path d="M37.6102 28.5L22.334 28.5L28.7453 35.0889L27.3699 36.5L19.1392 28.0667C18.8359 27.7556 18.8359 27.2556 19.1392 26.9444L27.3699 18.5L28.7453 19.9111L22.334 26.5L37.6102 26.5L37.6102 27.5L37.6102 28.5Z" fill="#3F414E" />
                    </Svg>
                    </TouchableOpacity>
                    <View style={{margin:20,flexDirection:'row',marginTop:10}}>
                    <Text style={styles.heading}>Mentors</Text></View>
                </View>
      <ScrollView style={{height:510}}>
            <View style= {{flex:1,backgroundColor:"white",marginBottom:20}}>
         {
                  this.state.Mentors.map((l) =>{
                      return(
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Eachmentor')}>
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
      </TouchableOpacity>
                      )
                        })
                    }
    </View>
    </ScrollView>
    </View>
  );
};
}
const styles=({
  img :{
    width:65,
    height:65,
},
heading:{
  fontSize:22,
  fontWeight:'bold',
  // marginLeft:10
}
});