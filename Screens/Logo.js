import React from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'
import image from './logo.jpeg'

export default function First() {
    return (
        <View>
            <View style={{marginTop:210,backgroundColor:"fff"}}>
            <Image source={image} style={{ aspectRatio: 1.3,resizeMode:'cover' }}/>
            </View>
            <View style={{marginTop:200,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity
             style={{width:320,height:56,borderRadius:40,backgroundColor:"#1578A1",marginTop:-19}}
             onPress={() => this.props.navigation.navigate('Login')}
             >
            <Text
             style={{marginLeft:100,marginTop:13,fontSize:23,color:'white',fontWeight:'bold',fontFamily:'Roboto'}}
             >Let's Connect</Text>
            </TouchableOpacity>
            </View>

        </View>
    );
}