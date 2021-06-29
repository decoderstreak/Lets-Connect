
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
import firestore from '@react-native-firebase/firestore';
import Back from '../assets/backarrow';
export default class Mentors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           
                    MentorCards: [],
        };
      }
      componentDidMount=()=>{
        firestore()
        .collection('Mentors')
        .get()
        .then(querySnapshot => {
          // console.log('Users ', querySnapshot.size);
          querySnapshot.forEach(documentSnapshot => {
            this.state.MentorCards=this.state.MentorCards.concat(documentSnapshot.data())
            {
                this.setState({
                    MentorCards:this.state.MentorCards
                })
            }
          });
        });
    }


    render(){
    return(
      <View style={{backgroundColor:'white',flex:1,}}>
<View style={{marginBottom:100}}>
<View style={styles.header}>
                   <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Back />
                    </TouchableOpacity>
                 
                    <Text style={styles.heading}>Mentors</Text></View>
             
      <ScrollView>
            <View style= {{flex:1,backgroundColor:"white",marginBottom:20}}>
         {
                  this.state.MentorCards.map((list) =>{
                      return(
                        
                        <Card  containerStyle={{borderRadius:15}} key={list.Name}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:"center"}}>

      <View style={{marginTop:1}}>
      <Image source={require('../assets/Avatar.png')} style={styles.img} />
      </View>

      <View style={{marginTop:1,position:"absolute",marginLeft:100}}> 
      <Text style={{fontSize:18}}>{list.Name}</Text>
      <Text style={{color:'#9B9B9B',fontSize:12}}>{list.Edu}</Text>
      <Text style={{color:'#9B9B9B',fontSize:12}}>{list.Status}</Text>
      </View> 
      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Eachmentor',list)}>
      <View style={{marginTop:4}}>
      <Svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="#116FAF"/>
        </Svg>
        </View>
        </TouchableOpacity>

        </View>
      </Card>
    
                      )
                        })
                    }
    </View>
    </ScrollView>
    </View>
    </View>
  );
};
}
const styles=({
  img :{
    width:60,
    height:60,
},
heading:{
  fontSize:20,
  fontWeight:'bold',
  marginLeft:15,
  marginTop:5
},
header:{
  marginLeft:20,
  flexDirection:"row",
  marginTop:15
},
});