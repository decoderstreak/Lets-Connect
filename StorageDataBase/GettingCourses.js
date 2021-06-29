import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';
import img1 from '../Cards/Html.png'
export default class GettingCourses extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Lists:[],
             List1:[]
        }
    }
    componentDidMount=()=>{
        firestore()
  .collection('TestTwo')
  .get()
  .then(querySnapshot => {
    // console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
    //   console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      
      this.state.Lists=this.state.Lists.concat(documentSnapshot.data())
      {
        this.setState({
            Lists:this.state.Lists,
            List1:Object.values(this.state.Lists)
        })
        // console.log((this.state.Lists),'lists bro');
        // console.log(Object.values(this.state.List1),'another lists bro');
    }
    });
  });
    }
    render() {
        // {console.log((Object.values(this.state.Lists)[0]),'list from courses');}
        return (
            <View>
                 {/* <Text> textInComponent </Text> */}
                {
                    Object.values(this.state.Lists.map((i)=>{
                        // console.log(i);
                        Object.keys(i).map((j)=>{
                            // console.log(j);
                            return(
                                
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#E65100','#FA500C', '#FB743E', '#FC9870','#FDAA89',]} style={{ width: 330, height: 80, borderRadius: 20, margin:10 }}>
                                    <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                        <Text style={{color:'white',fontSize:22,justifyContent:'center',alignItems:'center',marginLeft:80}}>{j}</Text>
                                        <Image source={img1} style={{width:70,height:65,marginTop:10,marginLeft:100}}></Image>
                                    </View>
                                </LinearGradient>
                            )
                        })
                    }))
                }
                {/* /* {Object.values(this.state.Lists).map((i)=>{
                    console.log(i,'in map');
                    Object.keys(i).map((j)=>{
                        console.log(j,'in double map');
                        return(
                            
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#E65100','#FA500C', '#FB743E', '#FC9870','#FDAA89',]} style={{ width: 330, height: 80, borderRadius: 20, margin:10 }}>
                            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                                <Text style={{color:'white',fontSize:22,justifyContent:'center',alignItems:'center',marginLeft:80}}>{i}</Text>
                                <Image source={img1} style={{width:70,height:65,marginTop:10,marginLeft:100}}></Image>
                            </View>
                        </LinearGradient>
                            // <View>
                            //     <Text>
                            //         jbroo{j}
                            //     </Text>
                            // </View>
                        )
                    })
                })} */ }
                 </View>
        )
    }
}
