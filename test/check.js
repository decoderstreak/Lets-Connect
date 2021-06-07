import React, { Component } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });

class Check extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> check </Text>
      </View>
    );
  }
}

export default Check