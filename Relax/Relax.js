import React, { Component } from 'react';
import { View, Text, StyleSheet,ImageBackground,Image,TouchableOpacity,ScrollView,SafeAreaView} from 'react-native';
import {Card} from 'react-native-elements';
// import relax from './images/Relaxx.png';
// import img1 from './images/River.png';
// import img2 from './images/Mountains.png';
// import img3 from './images/Rela1.png';
// import img4 from './images/Relax2.png';
// import next from './images/next.png';
import Back from '../assets/backarrow';

class Relax extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
                sounds : [
                    {
                        id:1,
                        img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FRiver.png?alt=media&token=1c5cc571-5f19-4547-8f3f-c39fa192cb65',
                        title:"Guided Meditation",
                        link: 'Player1'
                    },
                    {
                        id:2,
                        img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FMountains.png?alt=media&token=bfdf9d1b-6db6-47f5-a6c4-ebead9c21735',
                        title:"Violin",
                        link: 'Player2'
                    },
                    {
                        id:3,
                        img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FRela1.png?alt=media&token=dea1ab18-093c-4423-b96e-edc57d68748e',
                        title:"Flute Sounds",
                        link: 'Player3'
                    },
                    {
                        id:4,
                        img:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FRelax2.png?alt=media&token=cbedd205-8283-4225-a6d0-c9d83516952a',
                        title:"Sudarshan Kriya",
                        link: 'Track'
                    },
                    
                    
                ]
           


    };
  }

  

  render() {
    return (
        
                  <SafeAreaView style={{flex:1}}>
                 <View style={{flex:1, backgroundColor: "white"}}>
                     
                  <View style={styles.header}>
                   <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                    <Back />
                    </TouchableOpacity>
                 
                    <Text style={styles.heading}>Relax</Text></View>
       
       
     
            
            <View style={{marginTop:10}}>


                <View>
                <ImageBackground source={{uri:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2FRelaxx.png?alt=media&token=d88e637f-0a11-4926-b68e-b13ad7216906'}} style={{ width: 339, height: 195, marginLeft: 10, marginTop: 1,}}>
                    <Text style={{ fontSize: 25, marginLeft: 22, marginTop: 12 ,fontWeight:"bold"}}>Jai Gurudev</Text>
                </ImageBackground>
                </View>
                <Text style={{fontSize:22,fontWeight:"bold",marginLeft:22,marginTop:20}}>Access Playlists</Text>
                </View>
         

                                 {/* ...................cards...................... */}
                                 <ScrollView>
          <View style={{marginBottom:120}}>
              {
                  this.state.sounds.map((l) =>{
                      return( 
                              <Card  containerStyle={{height:80,borderRadius:15,}} key={l.title}>
                                  <View style={{flexDirection:"row"}}>
                                  <View>
                                  <Image source={{uri:l.img}} style={styles.img} />
                                  </View>

                                  <View>
                                      <Text style={styles.title} >{l.title}</Text>
                                     
                                  </View>
                                  <View style={{position:'absolute',marginLeft:270,paddingTop:13}}>
                                      <TouchableOpacity  onPress={() => {this.props.navigation.navigate(l.link)}}>
                                      <Image source={{uri:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Images%2Fnext.png?alt=media&token=bc0f2472-a359-4806-a11e-6c14d6c58b87'}} style={styles.next} />
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
      </SafeAreaView>
    
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
    heading:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:5
      },
      header:{
        marginLeft:20,
        flexDirection:"row",
        marginTop:15
      },
    
})
