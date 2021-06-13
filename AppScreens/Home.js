import React,{useState} from 'react'
import { View, Text,Button } from 'react-native'
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';
import vediotest from '../testvedio.mp4'
export default function Home() {
const [url, seturl] = useState('')
async function geturl()
{
const urll= await storage().ref('VEDIOS/bdaywishvedio.mp4').getDownloadURL();
seturl(urll)
console.log("url is",url);
}
    return (
        <View style={{width:100,height:100}}>
            {/* <Text>hii this is home page</Text>
            <Button title="geturl" onPress={()=>geturl()}/> */}
            {/* <Video 
            source={vediotest}
            style={{width:500,height:500}}
                // {uri:"../testvedio.mp4"
            // " https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/VEDIOS%2Fbdaywishvedio.mp4?alt=media&token=6df0a81e-4b65-489a-aa33-7b0d0569a856"
            // }
            /> */}
        </View>
    )
}
