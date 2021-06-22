import React from 'react'
import { View,Image,Text,TouchableOpacity,ScrollView} from 'react-native'
import image from './logo.jpeg'

export default class extends React.Component {
    render(){
    return (
        <View style={{backgroundColor:'white'}}>
            <ScrollView>
            <View style={{marginTop:210,backgroundColor:"fff"}}>
            <Image source={image} style={{ aspectRatio: 1.3,resizeMode:'cover' }}/>
            </View>
            <View style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
             style={{width:320,height:56,borderRadius:40,backgroundColor:"#1578A1",marginTop:-19,justifyContent:'center'}}
             onPress={() => this.props.navigation.navigate('Login')}
             >
            <Text
             style={{marginLeft:100,fontSize:23,color:'white',fontWeight:'bold',fontFamily:'Roboto',justifyContent:'center',alignItems:'center'}}
             >Let's Connect</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    );
    }
}