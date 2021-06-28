import React from 'react'
import { View,Image,Text,TouchableOpacity,ScrollView,StyleSheet,SafeAreaView} from 'react-native'
import image from './logo.jpeg'

export default class extends React.Component {
    render(){
    return (
     <SafeAreaView style={{ flex: 1,alignContent:"center",alignItems:"center"}}>
       
      
        
        <View style={{backgroundColor:'white',alignContent:"center",flex:1,alignItems:"center",}}>
            <ScrollView>


            <View style={{backgroundColor:"fff",marginTop:210}}>
            <Image source={image} style={{ aspectRatio: 1.3,resizeMode:'cover' }}/>
            </View>


            <View style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity 
            style={styles.button3}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={{fontSize:18,color:"white",fontWeight:"bold",marginTop:9}}>Let's Connect</Text>
            </TouchableOpacity>
            </View>


            </ScrollView>
                </View>
        </SafeAreaView>
    );
    }
   
}
const styles = StyleSheet.create({
    
   button3:{
    backgroundColor: "rgba(17, 111, 175, 1)",
     borderRadius: 55,
     width:280,
     height:45,
     flexDirection: 'row',
    justifyContent: 'center',
     marginBottom: 20,
     
  },
 
  });