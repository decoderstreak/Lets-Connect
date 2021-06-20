import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image,TouchableOpacity,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import relax from './images/Relax.png';
import img1 from './images/River.png';
import img2 from './images/Mountains.png';
import img3 from './images/Rela1.png';
import img4 from './images/Relax2.png';
import next from './images/next.png';

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
                        link: 'Player3'
                    },
                    
                    
                ]
           


    };
  }

  

  render() {
    return (
        <ScrollView>

      <View style={{flex:1, backgroundColor: "#fff",marginBottom:20}}>
       
       
     

            <View>
                <ImageBackground source={relax} style={{ width: 339, height: 195, marginLeft: 9, marginTop: 1,}}>
                    <Text style={{ fontSize: 25, marginLeft: 22, marginTop: 12 ,fontWeight:"bold"}}>Relax Sounds</Text>
                </ImageBackground>
                </View>
                <Text style={{fontSize:22,fontWeight:"bold",marginLeft:22,marginTop:20}}>Access Playlists</Text>
         

                                 {/* ...................cards...................... */}
          <View>
              {
                  this.state.sounds.map((l) =>{
                      return(
                        
                              
                          
                          <View>
                              
                              <Card  containerStyle={{borderRadius:8,height:100, backgroundColor: "#fff",borderRadius:20,borderWidth:1}}>

                                  <View style={{flexDirection:"row"}}>
                                  <View>
                                  <Image source={l.img} style={styles.img} />
                                  </View>

                                  <View>
                                      <Text style={styles.title} >{l.title}</Text>
                                     
                                  </View>
                                  <View style={{position:'absolute',marginLeft:270,paddingTop:20}}>
                                      <TouchableOpacity  onPress={() => {this.props.navigation.navigate(l.link)}}>
                                      <Image source={next} style={styles.next} />
                                      </TouchableOpacity>
                                      </View>
                                 
                                 
                                  </View>


                              </Card>
                              

                             </View>
                            
                      )
                  })
              }



         </View>                       


      </View>
      </ScrollView>
    );
  }
}

export default Relax;

const styles = StyleSheet.create( {

    img :{
        width:65,
        height:65

    },
    next:{
        width:22,
        height:22

    },
    title:{
        margin:20,
        fontSize:18,
        marginTop:15,
        fontWeight:"bold"

    }
    
})
