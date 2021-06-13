// import React from 'react'
// import { View, Text,TouchableOpacity } from 'react-native'
// import storage from '@react-native-firebase/storage';
// import { utils } from '@react-native-firebase/app';
// export default function Storage() {
//     const reference = storage().ref('black-t-shirt-sm.png');
//     return (
//         <View>
//             {/* <Text></Text> */}
//             <TouchableOpacity style={{BorderWidth:2,width:50,height:30,margin:50}}
//             onPress={async () => {
//                 // path to existing file on filesystem
//                 const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
//                 // uploads file
//                 await reference.putFile(pathToFile);
//               }}>
//                   <Text>upload</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }
import React,{useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import storage from '@react-native-firebase/storage';
// import { utils } from '@react-native-firebase/app';
// import Video from 'react-native-video';
import ImagePicker from 'react-native-image-crop-picker';
export default function Storage() {
    const [Img, setImg] = useState(null)
    const [percentage, setpercentage] = useState(0)
    const upload=()=>{
        // ImagePicker.openCamera({
        //     width: 300,
        //     height: 400,
        //     cropping: false,
        //   }).then(async image => {
            // ImagePicker.openPicker({
            //     width: 300,
            //     height: 400,
            //     cropping: true
            //   }).then(image => {
            ImagePicker.openPicker({
                 mediaType: "video",
            }).then((image) => {
            console.log(image);
            setImg(image.path)
            let imgName=image.path.substring(image.path.lastIndexOf('/')+1)
            console.log(imgName);
            let ext=imgName.split('.').pop();
            let name=imgName.split('.')[0];
            let newName =name+Date.now()+"."+ext;
            console.log("------------",ext,"+",name);
            // return;
            const reference = storage().ref("images/"+newName);
            try{
                const task = reference.putFile(image.path);
                task.on('state_changed',taskSnapshot=>{
                    setpercentage(Math.round((taskSnapshot.bytesTransferred/taskSnapshot.totalBytes)*100));
                })
                task.then(()=>{
                    alert('Image is uploaded')
                })
            }catch(err){
                console.log(err);
            }
          });
    }
    return (
        <View>
            <Image source={{uri:Img}}/>
            <TouchableOpacity style={{BorderWidth:2,width:50,height:30,margin:50}}
            onPress={()=>upload()}>
                  <Text>upload</Text>
                  <Text>{percentage}% upload</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });