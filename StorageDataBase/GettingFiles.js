import React,{useState,useEffect} from 'react'
import { View, Text,Image } from 'react-native'
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';
export default function GettingFiles() {
let urli ={uri:"https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/images%2Ff4b76715-f45f-4304-962f-3d08b29812f11623233510943.jpg?alt=media&token=5bad218c-ecb2-4a4e-b4f4-fdb3cf38de54"}
let urlv={uri:"https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Zoom%20Meeting%202021-06-04%2021-03-37.mp4?alt=media&token=5ae8c54c-c036-45b7-9df1-fca74e2799c3"}    
return (
        <View>
            {/* <Image source={urli} style={{width:500,height:500}}/> */}
            <Video source={urlv} style={{width:500,height:500}}/>
            {/* <Text></Text> */}
        </View>
    )
}
