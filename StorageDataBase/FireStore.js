import React from 'react'
import { View, Text } from 'react-native'
import firestore from '@react-native-firebase/firestore';
export default function FireStore() {
    const usersCollection = firestore().collection('Users');
    return (
        <View>
            <Text></Text>
        </View>
    )
}
