import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import storage from '@react-native-firebase/storage';
import { utils } from '@react-native-firebase/app';
export default function Storage() {
    const reference = storage().ref('black-t-shirt-sm.png');
    return (
        <View>
            {/* <Text></Text> */}
            <TouchableOpacity style={{BorderWidth:2,width:50,height:30,margin:50}}
            onPress={async () => {
                // path to existing file on filesystem
                const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
                // uploads file
                await reference.putFile(pathToFile);
              }}>
                  <Text>upload</Text>
            </TouchableOpacity>
        </View>
    )
}
