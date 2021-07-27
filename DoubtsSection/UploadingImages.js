import React,{useState} from 'react'
import { View, Text,Button } from 'react-native'
// import ImagePicker from 'react-native-image-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker from 'react-native-document-picker';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
const reference = storage().ref('black-t-shirt-sm.png');
export default function UploadingImages() {
    const [Img, setImg] = useState(null)
    const [percentage, setpercentage] = useState(0)
    const [Doc, setDoc] = useState(null)
    // const Selection
    const uploadGallery=()=>{
            ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true
              }).then(image => {
            console.log('image name is',image);
            setImg(image.path)
            let imgName=image.path.substring(image.path.lastIndexOf('/')+1)
            console.log(imgName);
            let ext=imgName.split('.').pop();
            console.log("extrension is------------",ext);
            let name=imgName.split('.')[0];
            let newName =name+Date.now()+"."+ext;
            console.log("------------",newName);
            // // return;
            const reference = storage().ref("Images/"+newName);
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
    const uploadCamera=()=>{
      ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: false,
        }).then(async image => {
          console.log('image name is',image);
          setImg(image.path)
          let imgName=image.path.substring(image.path.lastIndexOf('/')+1)
          console.log(imgName);
          let ext=imgName.split('.').pop();
          console.log("extrension is------------",ext);
          let name=imgName.split('.')[0];
          let newName =name+Date.now()+"."+ext;
          console.log("------------",newName);
          const reference = storage().ref("Images/"+newName);
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
  const UploadDoc = async ()=>{
    console.log('doc here');
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(
        res
        // res.type, // mime type
        // res.name,
        // res.size
      );
      setDoc(res.fileCopyUri)
      console.log('doc is ',res.fileCopyUri);
      let imgName=res.fileCopyUri.substring(res.fileCopyUri.lastIndexOf('/')+1)
      console.log('image name is',imgName);
      let ext=imgName.split('.').pop();
      console.log("extrension is------------",ext);
      let name=imgName.split('.')[0];
      let newName =name+Date.now()+"."+ext;
      console.log("------------",newName);
      // // return;
      const reference = storage().ref("Documents/"+newName);
      try{
          const task = reference.putFile(res.fileCopyUri);
          task.on('state_changed',taskSnapshot=>{
              setpercentage(Math.round((taskSnapshot.bytesTransferred/taskSnapshot.totalBytes)*100));
          })
          task.then(()=>{
              alert('Image is uploaded')
          })
      }catch(err){
          console.log(err);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  } 
    return (
        <View>
            <Text>hi this is uploading images</Text>
            <View>
<Menu>
    {/* <MenuTrigger>
        <Button title="Selct Image"/>
        </MenuTrigger> */}
      <MenuTrigger text='upload image' />
      <MenuOptions>
        <MenuOption onSelect={() => {uploadGallery(),alert(`Save`)}} text='Selcet from gallery' />
        <MenuOption onSelect={() => {uploadCamera(),alert(`Delete`)}} text="Take Photo" />
        {/* <MenuOption onSelect={()=>alert(`Select Avatar`)} text="Select Avatar"/> */}
      </MenuOptions>
    </Menu>
</View>
<Button title="upload Doc" onPress={()=>UploadDoc()}/>
        </View>
    )
}
