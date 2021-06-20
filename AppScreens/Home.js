import React,{Component} from 'react'
import { View, Text,Button,ScrollView,StyleSheet,Image, TouchableOpacity, ImageBackground, Dimensions ,fixed} from 'react-native'
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
// import SectionListInFocus from '@reactly/react-native-autoplay-scroll-video'

const { width } = Dimensions.get("window");
const height = width * 0.50;
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
    constructor() {
        super();
        this.state = { 
          paused:true,
          muted:true,
          positions:{start:null,end:null},
          // position:{start:null,end:null},
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
      // onVedioLayout=event=>{
      //   const {width}=Dimensions.get('window')
      //   // this.state.positions.start=event.nativeEvent.layout.x
      // }
    //   onVedioLayout=event=>{
    //     const {width}=Dimensions.get('window')
    //     this.state.positions.start= -(
    //         event.nativeEvent.layout.x
    //         -width
    //         +this.threshold
    //         )
    //     this.state.position
    //     {console.log(event.nativeEvent.layout.x,"this is layout");}
    //     // {console.log(this.state.position.start,"this is start");}
    //     // this.state.position.end=
    //     // event.nativeEvent.layout.x
    //     // +event.nativeEvent.layout.width
    //     // -this.threshold
    //     // {console.log(this.state.position.end,"this is end");}
    // }
    // onScroll=event=>{
    //      const scrollPosition=event.nativeEvent.contentOffset.x;
    //      const paused=this.state.paused
    //     //  const {start,end}=this.state.position
    //      {console.log('scroll positon is',scrollPosition);}
    //     //  {console.log(this.state.position.start,"this is start");}
    //     //  {console.log(this.state.position.end,"this is end");}
    //      if(scrollPosition>720 && scrollPosition<760 )
    //      {
    //         this.setState({
    //             paused:false
    //         })
    //      }
    //      else{
    //          this.setState({
    //              paused:true
    //          })
    //      }
    // } 
    render() { 
         this.state = { 
        displayName: auth().currentUser.displayName,
        uid: auth().currentUser.uid,
        email:auth().currentUser.email,
      } 
      let urlv={uri:"https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/VEDIOS%2Fbdaywishvedio.mp4?alt=media&token=6df0a81e-4b65-489a-aa33-7b0d0569a856"

      }
        return (
            <View>
            <View style={{margin:20,flexDirection:'row'}}>
{/* ---------------------------------------------------Header---------------------------------------------------------- */}
                <Text style={styles.heading}>Let's Connect</Text>
                <TouchableOpacity style={{marginLeft:80}} onPress={()=>this.RBSheet.open()}>
                <MentorIcon props={'black'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:30}} onPress={()=>console.log('notification')}>
                <NotificationIcon/>
                </TouchableOpacity>
            </View>
{/* ----------------------------------------------------BODY------------------------------------------------------------------ */}
          <ScrollView style={{height:550}}>
           <View>
           <View>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#90bcda', '#608BC5', '#116faf', '#116faf',]} style={{ width:330, height: 80, borderRadius: 20, margin:10 }}/>
          <Text style={{ fontSize: 18, margin:10 }}>Techify</Text>
          <View style={{ flexDirection: 'row',margin:10 }}>
            <View>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Cards")}
            >
              <ImageBackground source={home} 
              style={{ width: 157, height: 177,justifyContent:'center',alignItems:'center' }}
              >
                <Text style={{ color: 'white', fontSize: 18,marginTop:100 }}>Development</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>
            <View style={{marginLeft:15}}>
            <TouchableOpacity 
            onPress={()=>this.props.navigation.navigate("Cards2")}
            >
              <ImageBackground source={program} style={{ width: 157, height: 177,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ color: 'white', fontSize: 18,marginTop:100 }}>Programming</Text>
              </ImageBackground>
            </TouchableOpacity>
            </View>
          </View>
          </View>
           </View>
{/* -----------------------------------------------------vedios section---------------------------------------------------- */}
           <View>
            <ScrollingTest/>
           </View>
           {/* <View style={{ marginTop: 20, width: 59, borderRadius: 5 }}> */}
             {/* <SafeAreaView style={{flex:1}}>

            <ScrollView horizontal={true} scrollEventThrottle={16} onScroll={this.onScroll} >
                <View style={{marginLeft:750,marginRight:750}}>
            <VideoPlayer */}
            {/* <ScrollView
            style={{width:800,marginLeft:750,marginRight:750}}
            scrollEventThrottle={16}
            onScroll={this.onScroll}
              pagingEnabled
              horizontal={true}
              // onScroll={this.onScroll}
              showsHorizontalScrollIndicator={true}
              style={{ width, height }}>
              {
                videos.map((image, index) => (
                  <View style={{marginLeft:750,marginRight:750}}>
                  <VideoPlayer
                    key={index}
                    playInBackground={false}
                    onLayout={this.onVedioLayout}
                    paused={this.state.paused}
                    // paused= {true}
                    // paused= {this.state.active ? console.log('false'):console.log('true')}
                    source={{ uri: 'https://r7---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1624012235&ei=ayHMYKbQBYeAjuMPz8SxmAs&ip=103.159.33.77&id=o-AOCCmOpdJMgMvCcb6a732DV5OE21lRxcEmw0rUrppHrA&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=1156250&vprv=1&mime=video%2Fmp4&ns=IfeS9nwqOTE5tDa7CHCB7ycF&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623989808&fvip=7&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=9TZKny5-1IDFfpLFT&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgQeeR5ZuUdSiaQoY7qgmbxT8t8DNhoYtIkgf1LmJ4-1sCIFyn85k3CP7vu-sxt-nzOrW_nLStfO3jzJsDVzOZ7Z_g&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgH7Uj1-mt5ePEw4VQnieKvfIzx64SwDJPg-Q8XGscCi0CIDiY6_ndpTGV0d-5ad-TMMCts3ULUWez6mBGQeCmNUrH'}}
                    style={{ width:340, height, resizeMode: 'contain', borderRadius: 10 ,marginLeft:10}}></VideoPlayer>
                    </View>
                ))
              }
            </ScrollView> */}
          {/* </View> */}
          {/* <View style={{ flexDirection: 'row', bottom: 0, alignSelf: 'center', margin: 6 }}>
              {
                img.map((i, k) => (
                  <Text key={k} style={k == this.state.active ? styles.padingActiveText : styles.padingText}>⬤</Text>
                ))
              }
            </View> */}
            {/* <View><Text style={{ margin:10, fontSize: 18 ,marginTop:-10}}>Connect with inner core</Text> */}
            {/* <View style={{ marginTop: 10, width, height, borderRadius: 5}}>
              <ScrollView
                pagingEnabled
                horizontal
                onScroll={this.change}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>
                {
                  vids.map((image, index) => (
                    <View style={{flexDirection:'row'}}>
                    <VideoPlayer
                    // paused={true}
                      key={index}
                      // tapAnywhereToPause={true}
                      source={{ uri: 'https://r7---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1624012235&ei=ayHMYKbQBYeAjuMPz8SxmAs&ip=103.159.33.77&id=o-AOCCmOpdJMgMvCcb6a732DV5OE21lRxcEmw0rUrppHrA&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=1156250&vprv=1&mime=video%2Fmp4&ns=IfeS9nwqOTE5tDa7CHCB7ycF&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623989808&fvip=7&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=9TZKny5-1IDFfpLFT&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgQeeR5ZuUdSiaQoY7qgmbxT8t8DNhoYtIkgf1LmJ4-1sCIFyn85k3CP7vu-sxt-nzOrW_nLStfO3jzJsDVzOZ7Z_g&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgH7Uj1-mt5ePEw4VQnieKvfIzx64SwDJPg-Q8XGscCi0CIDiY6_ndpTGV0d-5ad-TMMCts3ULUWez6mBGQeCmNUrH'}}
                      // controls={true}
                      style={{ width:340, height, resizeMode: 'cover', borderRadius: 10 ,marginLeft:10}}>
                      
                        </VideoPlayer>
                         {/* <Image source={Play} style={{backgroundColor:'blue',width:50,height:50}}/> */}
                         {/* </View>
                      ))
                }
              </ScrollView>
            </View> */} 
            {/* <View style={{ flexDirection: 'row', bottom: 0, alignSelf: 'center', margin: 6 }}>
              {
                img.map((i, k) => (
                  <Text key={k} style={k == this.state.active ? styles.padingActiveText : styles.padingText}>⬤</Text>
                ))
              }
            </View> */}
          {/* </View> */}
          <View><Text style={{ fontSize: 18,margin:10,marginTop:20 }}>Connect with Dazzlers</Text>
            <View>
              <View style={{ margin:10, width, height: 256 }}>
                <ScrollView horizontal
                  showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mentors')}>
                  <View style={{ height: 207, width: 152, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={photo}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -0.5 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 14 }}>B.Sudarshan sir</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mentors')}>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={photo}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -0.5 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>Viswanath Murthy</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mentors')}>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={{ uri: 'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -1 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>Viswanath Murthy</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('Mentors')}>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={{ uri: 'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -1 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>Viswanath Murthy</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </View>
            {/* <View>
              <Video source={urlv} style={{width:200,height:500}}/>
            </View> */}
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
                </View>
                <View style={styles.container}>
                <Image source={image} />
                <Text style={{fontSize:20,marginTop:18,color:'#222222'}}> {this.state.displayName}</Text>
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
                }
              // })
  }
  )
  export default Home
