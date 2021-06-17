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
const { width } = Dimensions.get("window");
const height = width * 0.50;
const images = [
  'https://st1.latestly.com/wp-content/uploads/2019/07/02-3-1.jpg',
  'https://www.quotationof.com/images/dennis-ritchies-quotes-5.jpg',
  'https://im.indiatimes.in/content/itimes/photo/2016/May/13/1463126042-mark-zuckerberg-top-quotes-ever.jpg'
]
const videos=[
  // 'https://www.youtube.com/watch?v=Sccm6Z2mfEM',
  // 'https://r8---sn-ci5gup-8b5l.googlevideo.com/videoplayback?expire=1623932364&ei=bOnKYJueJdX44-EPm7-B2Ac&ip=103.159.33.69&id=o-AI9njSKASQA7ATxIB7qv2MGLxHL6SALWZ0PHFvbDh-Hb&itag=22&source=youtube&requiressl=yes&mh=i2&mm=31%2C29&mn=sn-ci5gup-8b5l%2Csn-ci5gup-h556&ms=au%2Crdu&mv=m&mvi=8&pl=24&initcwndbps=1481250&vprv=1&mime=video%2Fmp4&ns=G287A90kdh5zGO5KQh5XC28F&cnr=14&ratebypass=yes&dur=116.053&lmt=1621627569242995&mt=1623910386&fvip=8&fexp=24001373%2C24007246&beids=9466587&c=WEB&txp=6211224&n=H-0m23ue87OB6dKrf&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgKmMphi6Dym2xa_dlgl0kdghuqQDimWQq13yIVHH7pTcCIQCubUJ5tQCNu1e9dEG3Q4a2yxhs2LrB1rvsBbrKr5Njlg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANOdcnXc82WUxhHz3vpgDaaAcichycOX4XHC3Wac-VkuAiA8zyYtKA5TG5Yw6Srs9GJb514-J5dnJwk3bjB8xBtjhA%3D%3D',
  'https://r6---sn-ci5gup-8b5l.googlevideo.com/videoplayback?expire=1623933185&ei=oezKYOOvF-6L3LUP_sKR6Ac&ip=103.159.33.68&id=o-AOA-bDBysINJV6LbKUFnq1hnymPfywZ9qWp1QAw4y9sx&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C29&mn=sn-ci5gup-8b5l%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=6&pl=24&initcwndbps=687500&vprv=1&mime=video%2Fmp4&ns=FSqxDTqtx-ltMHVbNl1-n24F&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623910878&fvip=6&fexp=24001373%2C24007246&c=WEB&n=S2Gs0TI3A2cNQAYXC&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAMCmy-mITZH5qbXPZ-vGBiR6ObCWsG4bClHO9P3qKEHNAiANBsMw1OMLF19u1X_5OH1N7uefN8bbvyXpf9uAklUOHg%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgF5Xm8kUpxi-i5IzEmtPYF4waiyK_7Ox7JMK6e1IHjmoCIQCR5VyvVU4QInmGQaLgW1QelSII1Uf9tvgWHMcHjDNblw%3D%3D',
  'https://r1---sn-ci5gup-8b5s.googlevideo.com/videoplayback?expire=1623933072&ei=MOzKYOqNL7CR3LUPlJO40AE&ip=103.159.33.78&id=o-AHTrtYCxkUFTzhp_WDK06ZIrHLExVsBtQDwUKriYxv4t&itag=22&source=youtube&requiressl=yes&mh=hc&mm=31%2C29&mn=sn-ci5gup-8b5s%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=1&pl=24&initcwndbps=1106250&vprv=1&mime=video%2Fmp4&ns=wSztzPvLNpm5EAYCouBvhFgF&cnr=14&ratebypass=yes&dur=100.263&lmt=1508196298590388&mt=1623910878&fvip=7&fexp=24001373%2C24007246&c=WEB&n=yUO7rSPNK1OpJNEdE&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgVoRywSAhrxcu-22dU7cPtmNd2EkcnfVT5wcaqNGapxgCIQC8dsz5-RPQenfjSHOsGAjBjdpdZVP1iwm2Vau0vSAbjw%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAMRCvu-EYwsH2sc0AUGx4xRsAJravblWZPCrOMtAvaPbAiAvSEbe7yjgH6sxzpQ_BOhcS5hQsC74nvDhnOoQGpmcqg%3D%3D',
  'https://r4---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1623933853&ei=Pe_KYODIOZDNz7sP-s-z6As&ip=103.159.33.79&id=o-AP0Dv9VJ3xxigT2oQk1IiMZxKzBJi7BAqanHyUIBpF5A&itag=22&source=youtube&requiressl=yes&mh=X_&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h556&ms=au%2Crdu&mv=m&mvi=4&pl=24&initcwndbps=1520000&vprv=1&mime=video%2Fmp4&ns=9FOHSTQ1PuOD8NBKm-FHc7QF&cnr=14&ratebypass=yes&dur=180.070&lmt=1603215652855094&mt=1623911845&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432432&n=k01zM-CBkI9RNQmDZ&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgac1_F8_EHYoIAT43Kd-FuJNnK4KGcaDAyzI92JS7zuQCIAltRFzdocieDNXdkQHu7mJKcjFEe8gyZQKkMebBbYUX&sig=AOq0QJ8wRQIhAM6ohbXHarMFPAoMN_d541knySObd6TOtU7BmWcBH2IiAiAoZeCNAAykvfqexP_J8RD2DFCZ0FnruhMFE55g4VZeUg%3D%3D',
  // 'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/images%2FVID-20210407-WA00201623237604421.mp4?alt=media&token=71026388-008a-43e7-9bbb-7385f8e9ba81',
  // 'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/images%2FVID-20210505-WA00041623235056778.mp4?alt=media&token=c4299b49-055e-4a0c-bf4b-4def9f10c02e',
  // 'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/images%2FVID-20210607-WA00091623233628451.mp4?alt=media&token=13711de9-2333-40e4-943a-443fa4376584'     
]
const vids=[
  'https://r3---sn-ci5gup-8b5s.googlevideo.com/videoplayback?expire=1623934261&ei=1fDKYPDSHOL94-EP38ij4AM&ip=103.159.33.65&id=o-ANbiM_6oeIPFYIyJ0miaSM3P2T7ePiinaqqJ-LfO7yHA&itag=22&source=youtube&requiressl=yes&mh=de&mm=31%2C29&mn=sn-ci5gup-8b5s%2Csn-ci5gup-h55z&ms=au%2Crdu&mv=m&mvi=3&pl=24&initcwndbps=1563750&vprv=1&mime=video%2Fmp4&ns=g7lnn6qF01r0L7p7bAZVMYgF&cnr=14&ratebypass=yes&dur=307.246&lmt=1538620903897219&mt=1623912545&fvip=10&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=ilVv2TUf0MTdGMqRK&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIItgTPvN8RHTGQ3UgJl9Ee7V2o_mrzf6HFkFZPluYm6AiBr22-2BrczLyrCyPDGixzwbUIiMfCHjZItH_jfbxQTxA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgR7zFBlU5wbDImMh1TfE5PgQxmtaLvz6jHZsYQ8o1iu0CIQDuMdkll0lWzvi82Tfu8YbWw3iO9JK3JNMjczl-UtZ3RA%3D%3D',
  // 'https://r7---sn-ci5gup-8b5l.googlevideo.com/videoplayback?expire=1623934748&ei=vPLKYPPYNej74-EPy9G3yAQ&ip=103.159.33.73&id=o-AKG2itPJ9S_fpZjQMHH2NRRLeQ9fUCf-auotrvNUKesB&itag=18&source=youtube&requiressl=yes&mh=Es&mm=31%2C29&mn=sn-ci5gup-8b5l%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=908750&vprv=1&mime=video%2Fmp4&ns=QCzMmdHJtPr9PRgDJfLaZzsF&gir=yes&clen=8858870&ratebypass=yes&dur=196.046&lmt=1576059395095207&mt=1623912768&fvip=7&fexp=24001373%2C24007246&c=WEB&txp=1311222&n=Oi-6i8s93emEDg7zI&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgHqsaSfZy5AqUPSxDZ9ukmg6Y8f5vff9lEkAgSzsg3xECIGdZzjlM0NMZQoFQ8rrjF1499k9lKL5nlVz0EiHTa7Wn&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgbD7hpz_218h_eVr79BuvMfpkBKoizLu5nXW0YH_0NbQCIHtvziAtToZVQ1Q8rYy2uHD1jUXWvjNW33UtF7-saFUZ',
  'https://r7---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1623934932&ei=dPPKYISZOuWDg8UPs6OlqA8&ip=103.159.33.73&id=o-AGkX72rZmFppbkMWP-HHsQWOkAXvfCYYhM4XgH1M83id&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=1221250&vprv=1&mime=video%2Fmp4&ns=qEVfORP6GkVC_5hs7pS5HIsF&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623912768&fvip=7&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=XopH5DfS1shHLGPzH&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgUp3ye2oRFHqewnFFG6g5OEDtDns2TwDVapvD954ZGycCIChgq0zK3He1VEJIa6Nv1lJe8XQdedSyvL0fhaHVW0AV&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKHjKDoGVRG4ApR5o8f3vITkW9jBOY7O8ALisUZdEyM9AiBcgJ9rLMZsFjwvEpFNRPWAUBPjda_dBtxRDt8t6ukTSQ%3D%3D'
]
const img = [
  'https://i.ytimg.com/vi/6z59uHuwIJg/maxresdefault.jpg',
  'https://i.ytimg.com/vi/uZno9WHRiG0/maxresdefault.jpg',
  'https://i.ytimg.com/vi/nXyQUOmJ6BU/maxresdefault.jpg',
  // 'https://youtu.be/aqlN3O4xP-s'
]
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
           <View style={{ marginTop: 20, width: 59, borderRadius: 5 }}>
            <ScrollView
            // style={{width:400}}
              pagingEnabled
              horizontal
              onScroll={this.change}
              showsHorizontalScrollIndicator={false}
              style={{ width, height }}>
              {
                videos.map((image, index) => (
                  <Video
                    key={index}
                    // paused={false}
                    source={{ uri: image }}
                    style={{ width:340, height, resizeMode: 'contain', borderRadius: 10 ,marginLeft:10}}></Video>
                ))
              }
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row', bottom: 0, alignSelf: 'center', margin: 6 }}>
              {
                img.map((i, k) => (
                  <Text key={k} style={k == this.state.active ? styles.padingActiveText : styles.padingText}>⬤</Text>
                ))
              }
            </View>
            <View><Text style={{ margin:10, fontSize: 18 ,marginTop:-10}}>Connect with inner core</Text>
            <View style={{ marginTop: 10, width, height, borderRadius: 5}}>
              <ScrollView
                pagingEnabled
                horizontal
                onScroll={this.change}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>
                {
                  vids.map((image, index) => (
                    <Video
                    // paused={true}
                      key={index}
                      source={{ uri: image }}
                      style={{ width:340, height, resizeMode: 'contain', borderRadius: 10 ,marginLeft:10}}></Video>
                      ))
                }
              </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', bottom: 0, alignSelf: 'center', margin: 6 }}>
              {
                img.map((i, k) => (
                  <Text key={k} style={k == this.state.active ? styles.padingActiveText : styles.padingText}>⬤</Text>
                ))
              }
            </View>
          </View>
          <View><Text style={{ fontSize: 18,margin:10,marginTop:-10 }}>Connect with Dazzlers</Text>
            {/* <TouchableOpacity>
              <Image source={imgee} style={{ marginTop: -30, marginLeft: 310, width: 38, height: 38 }}></Image>
              <Image source={imgee2} style={{ marginTop: -38, marginLeft: 314, color: '#A7ACC8' }}></Image>

              <Text style={{ color: '#A7ACC8', fontSize: 12, marginLeft: 310, marginTop: 4 }}>see all</Text>
            </TouchableOpacity> */}
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
