import React, { Component,useRef } from 'react';
import { StyleSheet, View, Text, Button,Image,TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import image from '../assets/Avatar.png';
import RBSheet from "react-native-raw-bottom-sheet";
import Callender from '../assets/callender';
import Emailicon from '../assets/Emailicon';
import Nameicon from '../assets/name';
export default class Connect extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: auth().currentUser.displayName,
      uid: auth().currentUser.uid,
      email:auth().currentUser.email,
    }    
 
    return (
   

    <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ADD8E6"
            }}
          >
            <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
            <RBSheet
             ref={ref => {
            this.RBSheet = ref;
            }}
              closeOnDragDown={true}
              closeOnPressMask={true}
              height={500}
              customStyles={{
                wrapper: {
                  backgroundColor: "transparent"
                },
                container:
                {
                    borderRadius:20
    
                },
                draggableIcon: {
                  backgroundColor: "#000"
                },
              }}
            >
                <View>
              <Text style={{fontSize:34,marginLeft:20}}>My profile</Text>

              <View style={styles.container}>
              <Image source={image} />
              <Text style={{fontSize:20,marginTop:18,color:'#222222'}}> {this.state.displayName}</Text>
              <TouchableOpacity >
                  <Text style={{marginLeft:150,marginTop:20,fontSize:15,color:'#116FAF'}}>Edit</Text>
              </TouchableOpacity>
              </View>
              <View>
              <View style={styles.name}>
             
              <View style={{marginLeft:-10}}>
              <Nameicon />
              </View>
              <Text style={{fontSize:20,marginLeft:-80}}>Name</Text>
              <Text style={{fontSize:16,color:'#9B9B9B'}}> {this.state.displayName}</Text>
              </View>
              <View
                style={{
               borderBottomColor: '#E8E8E8',
               borderBottomWidth: 0.25,
               height:0.5,
                width:340,
               marginTop:28
                  }}
              />
    
              <View style={{ display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
             
              <Emailicon />
              <Text style={{fontSize:20,marginLeft:-15}}>E-mail</Text>
              <Text style={{fontSize:16,color:'#9B9B9B'}}> {this.state.email}</Text>
              </View>
              <View
                style={{
               borderBottomColor: '#E8E8E8',
               borderBottomWidth: 0.25,
                width:340,
               marginTop:28,
               marginLeft:-20
                  }}
              />
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20,marginLeft:-10}}>
            
              <Callender />
              <Text style={{fontSize:20,marginLeft:-30}}>Academic Year</Text>
              <Text style={{fontSize:16,color:'#9B9B9B'}}>2020</Text>
              </View>
              <View
                style={{
               borderBottomColor: '#E8E8E8',
               borderBottomWidth: 0.25,
                width:340,
               marginTop:28
                  }}
              />
              </View>
              </View>
            </RBSheet>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  },
  name:
      {
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around',
          marginTop:50,
          marginLeft:-25
      },
      container: {
              display:'flex',
              flexDirection:'row',
              marginLeft:20,
              marginTop:20
            },
}
)

