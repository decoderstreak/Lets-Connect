import React, { useEffect } from 'react';
import { View, Button,TouchableOpacity,Text } from 'react-native';
import image from '../test/shirt.png'
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

function Firestore() {
  // create bucket storage reference to not yet existing image
  const reference = storage().ref('');

  return (
    <View>
        <Text>hi.............</Text>
      <TouchableOpacity
        onPress={async () => {
          // path to existing file on filesystem
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/C:/Users/Uman streak\/Desktop/lets unite/shirt.png`;
          // uploads file
          await reference.putFile(pathToFile);
        }}
      >
          <Text>hi</Text>
          </TouchableOpacity>
    </View>
  );
}
export default Firestore;
