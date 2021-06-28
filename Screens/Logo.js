import React,{Component} from 'react'
import { View,Image,Text,TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import image from './logo.jpeg'

class Logo extends Component{
    render(){
    return (
        <View style={{backgroundColor:'white',flex:1}}>
            <View 
            // style={{marginTop:50}}
            >
            <ScrollView>
            <View style={{backgroundColor:"fff",justifyContent:'center',alignItems:'center'}}>
            <Image source={image} 
            style={{ aspectRatio: 1.1,resizeMode:'cover' }}
            />
            </View>
            <View style={{marginTop:'5%',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
            style={styles.button3}
            //  style={{width:320,height:56,borderRadius:40,backgroundColor:"#116FAF",marginTop:-19,justifyContent:'center'}}
             onPress={() => this.props.navigation.navigate('Login')}
             >
            <Text
             style={{fontSize:20,color:'white',fontWeight:'bold',fontFamily:'Roboto',justifyContent:'center',alignItems:'center'}}
             >Let's Connect</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
            </View>
        </View>
    );
    }
}
const styles=StyleSheet.create({
    button3:{
        backgroundColor: "rgba(17, 111, 175, 1)",
         borderRadius: 55,
         width:280,
         height:45,
         flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
         marginBottom: 20,
         
      },
})
export default Logo