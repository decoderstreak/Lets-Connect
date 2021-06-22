import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image,TouchableOpacity,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import relax from './images/Relax.png';
import img1 from './images/River.png';
import img2 from './images/Mountains.png';
import img3 from './images/Rela1.png';
import img4 from './images/Relax2.png';
import next from './images/next.png';
import Back from '../assets/backarrow';

class Relax extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
                sounds : [
                    {
                        id:1,
                        img:img1,
                        title:"River Flowing",
                        link: 'Player1'
                    },
                    {
                        id:2,
                        img:img2,
                        title:"Mountain Sounds",
                        link: 'Player2'
                    },
                    {
                        id:3,
                        img:img3,
                        title:"Flute Sounds",
                        link: 'Player3'
                    },
                    {
                        id:4,
                        img:img4,
                        title:"Piano Sound",
                        link: 'Track'
                    },
                    
                    
                ]
           


    };
  }

  

  render() {
    return (
        

      <View style={{flex:1, backgroundColor: "white", marginBottom:30}}>


              <View style={styles.header}>
                   <View style={styles.hcontent}>
                       <TouchableOpacity style={{marginTop:-8}}  onPress={() =>this.props.navigation.goBack() }>
                       <Back />
                       </TouchableOpacity>
                    <Text style={{fontSize:28,fontWeight:"bold",paddingLeft:15}}>Relax</Text>
                    </View>
              </View>
       
       
     
              <ScrollView 
            //   style={{backgroundColor:"white",height:40}}
              >
            <View style={{marginTop:25}}>
                <ImageBackground source={relax} style={{ width: 339, height: 195, marginLeft: 9, marginTop: 1,}}>
                    <Text style={{ fontSize: 25, marginLeft: 22, marginTop: 12 ,fontWeight:"bold"}}>Sadhana</Text>
                </ImageBackground>
                </View>
                <Text style={{fontSize:22,fontWeight:"bold",marginLeft:22,marginTop:20}}>Access Playlists</Text>
         

                                 {/* ...................cards...................... */}
          <View>
              {
                  this.state.sounds.map((l) =>{
                      return( 
                              <Card  containerStyle={{height:80,borderRadius:20,borderWidth:0,}}>
                                  <View style={{flexDirection:"row"}}>
                                  <View>
                                  <Image source={l.img} style={styles.img} />
                                  </View>

                                  <View>
                                      <Text style={styles.title} >{l.title}</Text>
                                     
                                  </View>
                                  <View style={{position:'absolute',marginLeft:270,paddingTop:13}}>
                                      <TouchableOpacity  onPress={() => {this.props.navigation.navigate(l.link)}}>
                                      <Image source={next} style={styles.next} />
                                      </TouchableOpacity>
                                      </View>
                                 
                                 
                                  </View>


                              </Card>    
                      )
                  })
              }
         </View>                       
         </ScrollView>
      </View>
    
    );
  }
}

export default Relax;

const styles = StyleSheet.create( {

    img :{
        width:65,
        height:65,
        margin:-10,
        

    },
    next:{
        width:22,
        height:22

    },
    title:{
        // margin:20,
        fontSize:18,
        marginTop:10,
        marginLeft:25,
        fontWeight:"bold"

    },
    header:{
        flexDirection:"row",
        paddingTop: 30,
        // paddingLeft:10,
        backgroundColor:"#FFFFFF",
        height:60,
        margin:10

    },
    hcontent :{
        flexDirection:"row",
        paddingLeft:10,
        marginTop:-10

    }
    
})
