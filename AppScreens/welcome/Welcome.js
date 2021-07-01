import React, { Component} from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView,StyleSheet,Dimensions} from 'react-native'
import welcome from './Welcomm.png'
import bird from './Vector.png'
import auth from '@react-native-firebase/auth';
const width=Dimensions.get('screen').width
const height =Dimensions.get('screen').height
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
             uid:' '
        }
    }
    render() {
        this.state = { 
            displayName: auth().currentUser.displayName,
            // uid:auth().currentUser.uid
          }   
        //   console.log('width brooo',width);
        //   console.log('height brooo',height);
        return (
            <View style={{backgroundColor:'#116faf',flex:1}}>
                <ScrollView style={styles.scrollheight}>
                    <View 
                    // style={{justifyContent:'center',alignItems:'center'}}
                    >
                    <View  style={styles.viewtag}>
                    <Text style={styles.texttag}>Hi {this.state.displayName} , Welcome to let’s connect</Text> 
                    </View>
                    </View>
                <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#EBEAEC',fontSize:14,fontWeight:'200',width:width/(1.2),textAlign:'center'}}>Explore the app, Find  your interest in specific technology and dive into it.</Text>
                </View>
                <View>
                </View>
                <View style={{alignItems:'center',marginTop:40}}>
                    <Image source={welcome} />
                </View>
                <View style={{marginTop:80,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity 
            style={styles.button3}
            onPress={()=>this.props.navigation.navigate('Tabnav')}>
            <Text style={{fontSize:18,color:"black",fontWeight:"bold",justifyContent:'center',alignItems:'center'}}>Get Started</Text>
            </TouchableOpacity>
            </View>

                </ScrollView>
            </View>
           
        )
    }
}


const styles=StyleSheet.create({
scrollheight:{
    height:height/(0.5)
},
viewtag:{
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
},
texttag:{
    color:'white',
    fontSize:22,
    textAlign:'center',
    width:width/(1.135),  
},
buttonview:{
    marginTop:60,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:30
},
button:{
    backgroundColor:'white',
    width:width/(1.135),
    height:height/(14),
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
},
buttontext:{
    fontSize:16,
    fontWeight:'bold'
},
button3:{
    backgroundColor: "white",
     borderRadius: 55,
     width:280,
     height:45,
     flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
     marginBottom: 20,
     
  },
})
export default Welcome