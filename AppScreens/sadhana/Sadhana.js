import React, {useEffect, useState} from 'react';
import {Text, Button, View,StyleSheet, Image,TouchableOpacity,ScrollView} from 'react-native';import {Svg,Path,Rect,Stop,Defs,LinearGradient} from 'react-native-svg'
// import Tra from '../../Sounds/ss.mp3';
import play from '../../Sounds/play1.png';
import pause from '../../Sounds/pause1.png';
import storage from '@react-native-firebase/storage';
import img6 from './circle1.png';
import img7 from './circle2.png';
import img8 from './circle3.png';
import img9 from './circle4.png';
// import Slider from 'react-native-smooth-slider';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
const songDetails = {
    id: '1',
    url: 'https://firebasestorage.googleapis.com/v0/b/let-s-connect-84651.appspot.com/o/audios%2FSudarshan%20Kriya%2FSudarshan%20Kriya%20Pranayama%20Count%20(English)%20Ujjai%20Breathing%20Bhastrika%20Om%20Chanting%20(1).mp3?alt=media&token=f8971cd8-acd5-4ec4-8194-34a79f512940',
    title: 'Sudarshan Kriya',
    album: 'Great Album',
    artist: '7 DAYS OF CALM ',
    artwork: 'https://picsum.photos/300',
  };
  
  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      ],
    });
    await TrackPlayer.add({
      id: songDetails.id,
      url: songDetails.url,
      type: 'default',
      title: songDetails.title,
      album: songDetails.album,
      artist: songDetails.artist,
      artwork: songDetails.artwork,
    });
    return true;
  };
//   const url = await storage().ref('VEDIOS/bdaywishvedio.mpy').getDownloadURL();
//   log
function Sadhana() {
    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [imageUrl, setImageUrl] = useState(undefined);
  const {position, duration} = useTrackPlayerProgress(250);

   useEffect(() => {
   const startPlayer = async () => {
      let isInit =  await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
   }
   startPlayer();
 }, []);

 useEffect(() => {
    storage()
      .ref('/audios/Sudarshan Kriya Pranayama Count (English) Ujjai Breathing Bhastrika Om Chanting.mp3') //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
        console.log('audio',url);
      })
      .catch((e) => console.log('Errors while downloading => ', e));
  }, []);


    

  //this hook updates the value of the slider whenever the current position of the song changes
 useEffect(() => {
   if (!isSeeking && position && duration) {
     setSliderValue(position / duration);
   }
 }, [position, duration]);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });



  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      //setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      //setIsPlaying(false);
    }
  };

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async value => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

    // state = {
    //     value: 0.2
    //   };
    
    // render() {
        return (
            // <ScrollView>
           <View>
               {/* -------------------------------------------X mark-------------------------------------- */}
            <View style={{width:414,height:896,backgroundColor:'#faf7f2'}}>
            <View style={{marginLeft:20,marginTop:50}}> 
            <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Rect x="54.5" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 54.5 54.5)" fill="white" stroke="#EBEAEC"/>
            <Path d="M20.5664 34.3574L34.2387 20.6853M20.735 20.6424C20.735 20.6424 29.2809 29.1884 34.433 34.3405L20.735 20.6424Z" stroke="#3F414E" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg></View>

           {/* -------------------------------------------back ground -images-------------------------------------- */}
           <Image source={img6} style={{marginTop:-135,marginLeft:-50}}></Image>
           <Image source={img7} style={{marginTop:-200,marginLeft:158,opacity:0.6}}></Image>
           <Text style={{fontSize:26,marginTop:5,marginLeft:95}}>Sudarshan Kriya</Text>
           <Text style={{marginLeft:135,marginTop:5}}>7 DAYS OF CALM</Text>
           <TouchableOpacity style={{width:70,height:70,borderRadius:35,
            marginTop:15,
            marginLeft:150,borderColor:'#BABCC6',borderWidth:6}}
              onPress={onButtonPressed}
             disabled={!isTrackPlayerInit}
            >
              <View style={{marginTop:-1,paddingLeft:-3}}>
                    {isPlaying ? <Image source={pause} style={{height:60,width:60,color:"white"}} />  :<Image source={play} style={{height:60,width:60,color:"white"}} />
}
                </View>
          </TouchableOpacity>
        <View style={styles.controlsContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          minimumTrackTintColor="#111000"
          maximumTrackTintColor="#000000"
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
          thumbTintColor="#000"
        />        
      </View>
           <Image source={img8} style={{marginTop:-140,marginLeft:215,opacity:0.6}}></Image>
           <Image source={img6} style={{marginTop:-250,marginLeft:-50}}></Image>
            </View>
           </View>
        //    </ScrollView>
        )
    }
export default Sadhana
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#EDEDED',
    },
    imageContainer: {
      flex: 0.5,
      justifyContent: 'center',
    },
    detailsContainer: {
    //   flex: 0.05,
      justifyContent: 'center',
      alignItems: 'center',
      // paddingTop:-150
    },
    controlsContainer: {
      flex: 0.45,
      justifyContent: 'flex-start',
    },
    albumImage: {
      width: 250,
      height: 250,
      alignSelf: 'center',
      borderRadius: 40,
    },
    progressBar: {
      height: 20,
      paddingBottom: 90,
      marginTop:-15
    },
    songTitle: {
      fontSize: 34,
      fontWeight: 'bold',
    },
    artist: {
      fontSize: 14,
      // marginTop:10
    },
  });
  
 


