import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native';

export default class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <TouchableOpacity 
            style={styles.button3}
            onPress={() => this.props.navigation.navigate('Login')}>
           <Text style={{fontSize:18,color:"white",fontWeight:"bold"}}>Let's Connect</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  text:{
    alignSelf:'center',
    fontSize:28,
    fontFamily:'Roboto',
    fontWeight:'bold',
    lineHeight:37.8,
    marginTop:70,
    marginBottom:40    
 },
 button1:{
     height:50,
     backgroundColor: "rgba(17, 111, 175, 1)",
     borderRadius: 38,
     // flexDirection:'column',
      paddingVertical: 12,
       paddingHorizontal: 12,
     flexDirection: 'row',
  justifyContent: 'center',
 justifyContent:"space-evenly",
 paddingLeft:10,
 marginBottom: 20,
},
 button2:{
     height:50,
    //  backgroundColor: "#EFF4FF",
    borderWidth:1,
    borderColor:"rgba(235, 234, 236, 1)",
     borderRadius: 38,
     // alignItems:'center',
     paddingVertical: 12,
      paddingHorizontal: 12,
      marginBottom: 40,
     //  justifyContent: 'center',
      justifyContent:'space-evenly',
 },
 button3:{
     height:50,
     backgroundColor: "rgba(17, 111, 175, 1)",
     borderRadius: 38,
     flexDirection:'column',
      paddingVertical: 12,
       paddingHorizontal: 12,
     flexDirection: 'row',
 justifyContent: 'center',
 marginBottom: 20,
},
textinput:{
    backgroundColor:'#F2F3F7',
    height:63,
    width:374,
    borderRadius:15,
    marginBottom: 20,
    paddingLeft:20,
}
});