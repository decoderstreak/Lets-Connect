import React,{Component} from 'react'
import { View, Text,Button,ScrollView,StyleSheet,Image} from 'react-native'
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';
import vediotest from '../testvedio.mp4';
import ProfileIcon  from '../Icons/ProfileIcon';
import MentorIcon from '../Icons/MentorIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Callender from '../assets/callender';
import Emailicon from '../assets/Emailicon';
import Nameicon from '../assets/name';
import image from '../assets/Avatar.png';
import RBSheet from "react-native-raw-bottom-sheet";
class Home extends Component {
    constructor() {
        super();
        this.state = { 
          uid: '',
          url:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Zoom%20Meeting%202021-06-04%2021-03-37.mp4?alt=media&token=5ae8c54c-c036-45b7-9df1-fca74e2799c3'
        }
      }
      signOut = () => {
        auth().signOut().then(() => {
          this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({ errorMessage: error.message }))
      }   
      // componentDidMount=(()=>{
      //    storage()
      //    .ref('VEDIOS/bdaywishvedio.mp4')
      //    .getDownloadURL().then((url)=>{
      //      this.state.url=url
      //    })
      // })
    render() { 
         this.state = { 
        displayName: auth().currentUser.displayName,
        uid: auth().currentUser.uid,
        email:auth().currentUser.email,
      } 
      // storage()
      //    .ref('VEDIOS/bdaywishvedio.mp4')
      //    .getDownloadURL().then((url)=>{
      //      this.state.url=url,
      //      console.log(this.state.url);
      //    }) 
      let urlv={uri:"https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/VEDIOS%2Fbdaywishvedio.mp4?alt=media&token=6df0a81e-4b65-489a-aa33-7b0d0569a856"
        // storage()
        //  .ref('VEDIOS/bdaywishvedio.mp4')
        //  .getDownloadURL()
        //  .then((url)=>{})
      }
        return (
            <View>
            <View style={{margin:30,flexDirection:'row'}}>
{/* ---------------------------------------------------Header---------------------------------------------------------- */}
                <Text style={styles.heading}>Let's Connect</Text>
                <TouchableOpacity style={{marginLeft:80}} onPress={()=>this.RBSheet.open()}>
                <MentorIcon props={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:30}} onPress={()=>console.log('notification')}>
                <NotificationIcon/>
                </TouchableOpacity>
            </View>
            <View>
              <Video source={urlv} style={{width:200,height:500}}/>
            </View>
            <ScrollView>
   {/* ----------------------------------------------------RB SHEET-------------------------------------------------------*/}
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
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:34,marginLeft:20}}>My profile</Text>
                <View style={{marginTop:20,marginLeft:130}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profile")}>
                  <Text style={{fontSize:14,color:'#116FAF',fontWeight:'bold'}}>Edit</Text>
                </TouchableOpacity>
                </View>
                {/* <TouchableOpacity onPress={()=>console.log('edit')} style={{marginTop:20,marginLeft:130}}>
                  <Text style={{fontSize:14,color:'#116FAF'}}>Edit</Text>
                </TouchableOpacity> */}
                </View>
                <View style={styles.container}>
                <Image source={image} />
                <Text style={{fontSize:20,marginTop:18,color:'#222222'}}> {this.state.displayName}</Text>
                <TouchableOpacity onPress={()=>console.log('hiiiiiiiiiiiiiiii')}>
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
            </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    heading:{
        fontSize:22,
        fontWeight:'bold'
},
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
              backgroundVideo: {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              },
  }
  )
  export default Home
// // class Connect extends  Home() {
// // const [url, seturl] = useState('')
// // async function geturl()
// // {
// // const urll= await storage().ref('VEDIOS/bdaywishvedio.mp4').getDownloadURL();
// // seturl(urll)
// // console.log("url is",url);
// // }
//     // return (
//     //     <View>
//     //         <View style={{margin:30,flexDirection:'row'}}>
//     //             <Text style={styles.heading}>Let's Connect</Text>
//     //             <TouchableOpacity style={{marginLeft:80}} onPress={()=>console.log('rawbottomsheet')}>
//     //             <MentorIcon props={'black'}/>
//     //             </TouchableOpacity>
//     //             <TouchableOpacity style={{marginLeft:30}} onPress={()=>console.log('notification')}>
//     //             <NotificationIcon/>
//     //             </TouchableOpacity>
//     //         </View>
            
//     //         <ScrollView>
//     //         {/* <Connect/> */}
//     //         </ScrollView>
//     //     </View>
//         // <View style={{width:100,height:100}}>
//         //     {/* <Text>hii this is home page</Text>
//         //     <Button title="geturl" onPress={()=>geturl()}/> */}
//         //     {/* <Video 
//         //     source={vediotest}
//         //     style={{width:500,height:500}}
//         //         // {uri:"../testvedio.mp4"
//         //     // " https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/VEDIOS%2Fbdaywishvedio.mp4?alt=media&token=6df0a81e-4b65-489a-aa33-7b0d0569a856"
//         //     // }
//         //     /> */}
//         // </View>
//     )
// }
// // const styles= StyleSheet.create({
// //     heading:{
// //             fontSize:22,
// //             fontWeight:'bold'
// //     }
// // })
// class Connect extends Component {
//     constructor() {
//       super();
//       this.state = { 
//         uid: ''
//       }
//     }
  
//     signOut = () => {
//       auth().signOut().then(() => {
//         this.props.navigation.navigate('Login')
//       })
//       .catch(error => this.setState({ errorMessage: error.message }))
//     }  
  
//     render() {
//       this.state = { 
//         displayName: auth().currentUser.displayName,
//         uid: auth().currentUser.uid,
//         email:auth().currentUser.email,
//       }    
   
//       return (
     
  
//       <View
//               // style={{
//               //   flex: 1,
//               //   justifyContent: "center",
//               //   alignItems: "center",
//               //   backgroundColor: "#ADD8E6"
//               // }}
//             >
//               <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
//               <RBSheet
//                ref={ref => {
//               this.RBSheet = ref;
//               }}
//                 closeOnDragDown={true}
//                 closeOnPressMask={true}
//                 height={500}
//                 customStyles={{
//                   wrapper: {
//                     backgroundColor: "transparent"
//                   },
//                   container:
//                   {
//                       borderRadius:20
      
//                   },
//                   draggableIcon: {
//                     backgroundColor: "#000"
//                   },
//                 }}
//               >
//                   <View>
//                 <Text style={{fontSize:34,marginLeft:20}}>My profile</Text>
  
//                 <View style={styles.container}>
//                 <Image source={image} />
//                 <Text style={{fontSize:20,marginTop:18,color:'#222222'}}> {this.state.displayName}</Text>
//                 <TouchableOpacity >
//                     <Text style={{marginLeft:150,marginTop:20,fontSize:15,color:'#116FAF'}}>Edit</Text>
//                 </TouchableOpacity>
//                 </View>
//                 <View>
//                 <View style={styles.name}>
               
//                 <View style={{marginLeft:-10}}>
//                 <Nameicon />
//                 </View>
//                 <Text style={{fontSize:20,marginLeft:-80}}>Name</Text>
//                 <Text style={{fontSize:16,color:'#9B9B9B'}}> {this.state.displayName}</Text>
//                 </View>
//                 <View
//                   style={{
//                  borderBottomColor: '#E8E8E8',
//                  borderBottomWidth: 0.25,
//                  height:0.5,
//                   width:340,
//                  marginTop:28
//                     }}
//                 />
      
//                 <View style={{ display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
               
//                 <Emailicon />
//                 <Text style={{fontSize:20,marginLeft:-15}}>E-mail</Text>
//                 <Text style={{fontSize:16,color:'#9B9B9B'}}> {this.state.email}</Text>
//                 </View>
//                 <View
//                   style={{
//                  borderBottomColor: '#E8E8E8',
//                  borderBottomWidth: 0.25,
//                   width:340,
//                  marginTop:28,
//                  marginLeft:-20
//                     }}
//                 />
//                 <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:20,marginLeft:-10}}>
              
//                 <Callender />
//                 <Text style={{fontSize:20,marginLeft:-30}}>Academic Year</Text>
//                 <Text style={{fontSize:16,color:'#9B9B9B'}}>2020</Text>
//                 </View>
//                 <View
//                   style={{
//                  borderBottomColor: '#E8E8E8',
//                  borderBottomWidth: 0.25,
//                   width:340,
//                  marginTop:28
//                     }}
//                 />
//                 </View>
//                 </View>
//               </RBSheet>
//             </View>
//       );
//     }
//   }
  
