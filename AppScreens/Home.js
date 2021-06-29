import React,{Component} from 'react'
import { View, Text,Button,ScrollView,StyleSheet,Image, TouchableOpacity, ImageBackground, Dimensions ,fixed, Alert} from 'react-native'
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import Video from 'react-native-video';
import vediotest from '../testvedio.mp4';
import ProfileIcon  from '../Icons/ProfileIcon';
import MentorIcon from '../Icons/MentorIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import Callender from '../assets/callender';
import Emailicon from '../assets/Emailicon';
import Nameicon from '../assets/name';
import image from '../assets/Avatar.png';
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import home from '../Home/Development.png'
import program from '../Home/Programing.png'
import imgee from '../Home/circle.png';
import imgee2 from '../Home/Arrow.png'
import photo from '../Home/Sir.png';
import Play from '../Sounds/play1.png';
import Pause from '../Sounds/pause1.png';
import VideoPlayer from 'react-native-video-controls';
import ScrollingTest from '../Scrolling/ScrollingTest';
import firestore from '@react-native-firebase/firestore';
import FireStore from '../StorageDataBase/FireStore';

// import SectionListInFocus from '@reactly/react-native-autoplay-scroll-video'
const width=Dimensions.get('window').width
const height =Dimensions.get('window').height
// const height = width * 0.50;
const images = [
  'https://st1.latestly.com/wp-content/uploads/2019/07/02-3-1.jpg',
  'https://www.quotationof.com/images/dennis-ritchies-quotes-5.jpg',
  'https://im.indiatimes.in/content/itimes/photo/2016/May/13/1463126042-mark-zuckerberg-top-quotes-ever.jpg'
]
const videos=[
  'https://r3---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1623960453&ei=JVfLYMC6J_v-4-EPt_C3-AU&ip=103.159.32.18&id=o-ALctXY9wen8COMC2j_XV6p2pdGVuUFEEcOxyStytBt1c&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C26&mn=sn-qxaeen7l%2Csn-cvh7knle&ms=au%2Conr&mv=m&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&ns=6PaeDi1sudciF4NC2CjXfFAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623938692&fvip=3&fexp=24001373%2C24007246&c=WEB&n=d6IfMJYh1op68c4je&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALumjod_zk8P4rXh7DULj8kh5muDZiM8KR93_GCB6qLVAiBYHhoYEyKkusj5hdCeGFbtYna3-A6DUvxidhXRsZYXLA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAPsdfwGCOMaUMcVETcf89nDz75gWTCDDcLMbqtV1KUoOAiEAm9B0J0Esl-MwmYvLdHKns2QzqQjXSrDDDZYF1aXKHeA%3D',
  // 'https://r3---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1623960453&ei=JVfLYMC6J_v-4-EPt_C3-AU&ip=103.159.32.18&id=o-ALctXY9wen8COMC2j_XV6p2pdGVuUFEEcOxyStytBt1c&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C26&mn=sn-qxaeen7l%2Csn-cvh7knle&ms=au%2Conr&mv=m&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&ns=6PaeDi1sudciF4NC2CjXfFAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623938692&fvip=3&fexp=24001373%2C24007246&c=WEB&n=d6IfMJYh1op68c4je&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALumjod_zk8P4rXh7DULj8kh5muDZiM8KR93_GCB6qLVAiBYHhoYEyKkusj5hdCeGFbtYna3-A6DUvxidhXRsZYXLA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAPsdfwGCOMaUMcVETcf89nDz75gWTCDDcLMbqtV1KUoOAiEAm9B0J0Esl-MwmYvLdHKns2QzqQjXSrDDDZYF1aXKHeA%3D',
  // 'https://r3---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1623960453&ei=JVfLYMC6J_v-4-EPt_C3-AU&ip=103.159.32.18&id=o-ALctXY9wen8COMC2j_XV6p2pdGVuUFEEcOxyStytBt1c&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C26&mn=sn-qxaeen7l%2Csn-cvh7knle&ms=au%2Conr&mv=m&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&ns=6PaeDi1sudciF4NC2CjXfFAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623938692&fvip=3&fexp=24001373%2C24007246&c=WEB&n=d6IfMJYh1op68c4je&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALumjod_zk8P4rXh7DULj8kh5muDZiM8KR93_GCB6qLVAiBYHhoYEyKkusj5hdCeGFbtYna3-A6DUvxidhXRsZYXLA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAPsdfwGCOMaUMcVETcf89nDz75gWTCDDcLMbqtV1KUoOAiEAm9B0J0Esl-MwmYvLdHKns2QzqQjXSrDDDZYF1aXKHeA%3D',
  ]
const vids=[
// 'https://r4---sn-qxaeen7e.googlevideo.com/videoplayback?expire=1623960698&ei=GljLYKTwFub7juMPoaKw8A0&ip=103.159.32.18&id=o-AGJ86xd9DKx8v9svOrULLM5OtNlhZvPwaCAXmqjCT-5l&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C26&mn=sn-qxaeen7e%2Csn-cvh7knek&ms=au%2Conr&mv=m&mvi=4&pl=24&vprv=1&mime=video%2Fmp4&ns=Q8tqDhV4VunG1SEjrYy7Bk0F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623938935&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=YHYLExZext5EgIvoB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgS2JjNGW6p27SnjG-ANoNCeTLo70nsY-I0HFkDgpP414CIQD0SCdSLXDpa73daoYz1qOXKp3vKuLA2GiATfDxp12HSA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgXsA0AqK-UZBHtWkIhB8qkph7i38RJMlkW9eKv5R0jNMCIDYVBTe9UtxvuIHmGmZifPwiQ62EXK1zAQJDKFw14yGj',  
// 'https://r4---sn-qxaeen7e.googlevideo.com/videoplayback?expire=1623960698&ei=GljLYKTwFub7juMPoaKw8A0&ip=103.159.32.18&id=o-AGJ86xd9DKx8v9svOrULLM5OtNlhZvPwaCAXmqjCT-5l&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C26&mn=sn-qxaeen7e%2Csn-cvh7knek&ms=au%2Conr&mv=m&mvi=4&pl=24&vprv=1&mime=video%2Fmp4&ns=Q8tqDhV4VunG1SEjrYy7Bk0F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623938935&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=YHYLExZext5EgIvoB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgS2JjNGW6p27SnjG-ANoNCeTLo70nsY-I0HFkDgpP414CIQD0SCdSLXDpa73daoYz1qOXKp3vKuLA2GiATfDxp12HSA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgXsA0AqK-UZBHtWkIhB8qkph7i38RJMlkW9eKv5R0jNMCIDYVBTe9UtxvuIHmGmZifPwiQ62EXK1zAQJDKFw14yGj',  
// 'https://r4---sn-qxaeen7e.googlevideo.com/videoplayback?expire=1623960698&ei=GljLYKTwFub7juMPoaKw8A0&ip=103.159.32.18&id=o-AGJ86xd9DKx8v9svOrULLM5OtNlhZvPwaCAXmqjCT-5l&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C26&mn=sn-qxaeen7e%2Csn-cvh7knek&ms=au%2Conr&mv=m&mvi=4&pl=24&vprv=1&mime=video%2Fmp4&ns=Q8tqDhV4VunG1SEjrYy7Bk0F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623938935&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=YHYLExZext5EgIvoB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgS2JjNGW6p27SnjG-ANoNCeTLo70nsY-I0HFkDgpP414CIQD0SCdSLXDpa73daoYz1qOXKp3vKuLA2GiATfDxp12HSA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgXsA0AqK-UZBHtWkIhB8qkph7i38RJMlkW9eKv5R0jNMCIDYVBTe9UtxvuIHmGmZifPwiQ62EXK1zAQJDKFw14yGj',  
]
const img = [
  'https://i.ytimg.com/vi/6z59uHuwIJg/maxresdefault.jpg',
  'https://i.ytimg.com/vi/uZno9WHRiG0/maxresdefault.jpg',
  'https://i.ytimg.com/vi/nXyQUOmJ6BU/maxresdefault.jpg',
  // 'https://youtu.be/aqlN3O4xP-s'
]
class Home extends Component {
  threshold=150;
  constructor(props) {
    super(props)
    this.state = {
      Lists:[] ,
          paused:true,
          muted:true,
          positions:{start:null,end:null},
          uid: '',
          url:'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/Zoom%20Meeting%202021-06-04%2021-03-37.mp4?alt=media&token=5ae8c54c-c036-45b7-9df1-fca74e2799c3',
        }
      }
      signOut = () => {
        auth().signOut()
        .then(() => {
          Alert.alert('SignedOut Successfully!!!')

        })
        .catch(error => this.setState({ errorMessage: error.message }))
      } 
    render() { 
         this.state = { 
        displayName: auth().currentUser.displayName,
        uid: auth().currentUser.uid,
        email:auth().currentUser.email,
      } 
      let urlv={uri:"https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/VEDIOS%2Fbdaywishvedio.mp4?alt=media&token=6df0a81e-4b65-489a-aa33-7b0d0569a856"
      }
      // console.log(this.state.Lists);
      // console.log('width',width);
      // console.log('height',height);
        return (
            <View>
            <View style={{flexDirection:'row',marginLeft:'5%',marginTop:'5%',marginBottom:'3%'}}>
{/* ---------------------------------------------------Header---------------------------------------------------------- */}
                <Text style={styles.heading}>Let's Connect</Text>
                <TouchableOpacity 
                style={styles.profile}
                onPress={()=>this.RBSheet.open()}>
                <MentorIcon props={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.notification} onPress={()=>console.log('notification')}>
                <NotificationIcon/>
                </TouchableOpacity>
            </View>
{/* ----------------------------------------------------BODY------------------------------------------------------------------ */}
          <ScrollView style={{height:'100%'}}>
           {/* <View>
           <View> */}
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#90bcda', '#608BC5', '#116faf', '#116faf',]} 
            style={{ width:'90%', height: 80, borderRadius: 20, marginLeft:'5%',marginTop:'2%'}}/>
          <Text style={{ fontSize: 16, marginLeft:'5%',marginTop:'3%' }}>Techify</Text>
          <View 
          style={{ 
            flexDirection:'row',
            marginLeft:'5%',
            marginTop:'3%',
            // backgroundColor:'black',
            width:'90%',
            height:'19%'
            }}>
              <View 
              style={{
                position:'absolute',
                width:'47%',
                height:'100%',
                // backgroundColor:'pink',
                borderRadius:20
                // borderRadius:'5%'
                // width:
              }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Cards")}>
                <ImageBackground source={home} 
                style={{
                  width:'100%',
                  height:'100%',
                  justifyContent:'center',
                  alignItems:'center'}}>
                <Text
                style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:16,
                  // marginTop:'50%'
                }}>Development</Text>
                </ImageBackground>
                </TouchableOpacity>
              </View>
              <View
              style={{
                position:'relative',
                width:'47%',
                height:'100%',
                // backgroundColor:'pink',
                // borderRadius:'5%',
                marginLeft:'53%',
                borderRadius:20
                // justifyContent:'center',
                // alignContent:'center'
                // width:
              }}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate("Cards2")}>
                <ImageBackground source={program} 
                style={{
                  width:'100%',
                  height:'100%',
                  justifyContent:'center',
                  alignItems:'center'}}>
                <Text
                style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:16,
                }}>Programming</Text>
                </ImageBackground>
                </TouchableOpacity>
                              </View>
              {/* <View
              style={{
                position:'absolute',
                width:'50%',
                height:'100%',
                backgroundColor:'pink',
                borderRadius:25
                // width:
              }}>

              </View> */}
            {/* <View style={{width:'45%',height:'50%'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Cards")} 
            style={{backgroundColor:20}} 
            >
              <ImageBackground source={home} style={{justifyContent:'center',alignItems:'center',borderRadius:20,width:'100%',height:'100%'}}>
                <Text style={{ color: 'white', fontSize: 16,fontWeight:'bold' }}>Development</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View> */}
            {/* <View style={{width:'45%',height:'100%',marginLeft:'4%'}}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("Cards2")} 
            // style={{backgroundColor:20}} 
            >
              <ImageBackground source={program} style={{justifyContent:'center',alignItems:'center',borderRadius:20}}>
                <Text style={{ color: 'white', fontSize: 16,fontWeight:'bold'}}>Programming</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View> */}
            {/* <View style={{marginLeft:15}}>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Cards2")}
            >
              <ImageBackground source={program} style={{ width: 157, height: 177,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ color: 'white', fontSize: 18,marginTop:100 }}>Programming</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View> */}
          </View>
         
{/* -----------------------------------------------------vedios section---------------------------------------------------- */}
           <View style={{marginLeft:'3%',marginTop:'5%'}}>
            <ScrollingTest/>
           </View>
          <View><Text style={{ fontSize: 18,margin:'5%',marginTop:'3%' }}>Connect with Dazzlers</Text>
            <View style={{marginLeft:'3%'}}>
              <FireStore navigation={this.props.navigation}/>
             </View>
          </View>
            {/* <View>
              <Video source={urlv} style={{width:200,height:500}}/>
            </View> */}
            <ScrollView 
            // style={{height:300}}
            >
   {/* ----------------------------------------------------RB SHEET-------------------------------------------------------*/}
              <RBSheet
               ref={ref => {
              this.RBSheet = ref;
              }}
             
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                height={400}
                
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
                {/* {console.log('testing rbsheet')} */}
                  <View>
              
                  
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{fontSize:22,fontWeight:'bold',margin:'2%'}}>My profile</Text>
                <View style={{margin:'3%',marginLeft:'40%'}}>
                  
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Profile"),this.RBSheet.close()}}>
                  <Text style={{fontSize:14,color:'#116FAF',fontWeight:'bold'}}>Edit</Text>
                </TouchableOpacity>
                </View>
                </View>
               

                
                <View style={styles.container}>
                <Image source={image} />
                <Text style={{fontSize:18,margin:'5%',color:'#222222',fontWeight:'bold'}}> {this.state.displayName}</Text>
                </View>
                <View>
                  <View style={{margin:'5%',flexDirection:'row',marginTop:'6%'}}>
                    <Nameicon/>
                    <Text style={{fontSize:18,marginLeft:'5%'}}>Name:</Text>
                    <Text style={{fontSize:16,color:'#9B9B9B',marginLeft:'1%'}}> {this.state.displayName}</Text>
                  </View>
                  <View style={{margin:'5%',flexDirection:'row'}}>
                  <Emailicon />
                    <Text style={{fontSize:18,marginLeft:'5%'}}>E-mail:</Text>
                    <Text style={{fontSize:16,color:'#9B9B9B',marginLeft:'1%'}}>{this.state.email}</Text>
                  </View>
                  <View style={{margin:'5%',flexDirection:'row',marginLeft:'4%'}}>
                  <Callender />
                  {/* <View style={{textAlign:'right'}}> */}
                    <Text style={{fontSize:18,marginLeft:'4%',}}>Academic Year:</Text>
                  {/* </View> */}
                    <Text style={{fontSize:16,color:'#9B9B9B',marginLeft:'1%'}}>2020</Text>
                  </View>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                    {/* <Button title="Signout" onPress={()=>this.signOut()}/> */}
                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>this.signOut()}>
                        <Text style={styles.buttontext}>Sign Out</Text>
                    </TouchableOpacity>
                  </View>
             
                
                </View>
              
                </View>
             
              </RBSheet>
            </ScrollView>
            </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
heading:{
        fontSize:20,
        fontWeight:'bold',
        // marginLeft:30
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
    padingText: {
                  color: '#888',
                  padding: 3,
                  margin: 3,
                  fontSize: (width / 30)
                },
    padingActiveText: {
                  color: 'black',
                  padding: 3,
                  margin: 3,
                  fontSize: (width / 30),
                },
                profile:{
                  marginLeft:'40%'
                },
                notification:{
                  marginLeft:'7%'
                },
                buttontext:{
                  fontFamily:'Roboto',fontSize:16,alignItems:'center',justifyContent:'center',fontWeight:"bold",color:"white",marginTop:9
              },
              button:{
                backgroundColor: "rgba(17, 111, 175, 1)",
                borderRadius: 55,
                width:280,
                height:45,
                flexDirection: 'row',
               justifyContent: 'center',
                marginBottom: 20,
            },
    
  }
  )
  export default Home
