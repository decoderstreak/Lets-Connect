import React, {useEffect, useState} from 'react';
import {Text, Button, View,StyleSheet, Image,TouchableOpacity,ScrollView} from 'react-native';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
// import { Icon } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import {Svg,Path,Rect,Stop,Defs,LinearGradient} from 'react-native-svg'
import storage from '@react-native-firebase/storage';
import Tra from './ss.mp3';
import play from './play1.png';
import pause from './pause1.png';
import s1 from './s1.png';
import s4 from './s4.png';
import s2 from './s2.png';
import s3 from './s3.png';
import img6 from '../AppScreens/sadhana/circle1.png'
import img7 from '../AppScreens/sadhana/circle2.png';
import img8 from '../AppScreens/sadhana/circle3.png';
import img9 from '../AppScreens/sadhana/circle4.png';


const songDetails = {
  id: '1',
  url:
    Tra,
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

const App = () => {
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
      .ref('/videos/Sudarshan Kriya Pranayama Count (English) Ujjai Breathing Bhastrika Om Chanting.mp3') //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
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

  return (
    <View 
    // style={styles.mainContainer}
    >
     <ScrollView>
     <View style={{width:414,height:896,backgroundColor:'#faf7f2'}}>
            <View style={{marginLeft:20,marginTop:50}}> 
            <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/Svg">
            <Rect x="54.5" y="54.5" width="54" height="54" rx="27" transform="rotate(-180 54.5 54.5)" fill="white" stroke="#EBEAEC"/>
            <Path d="M20.5664 34.3574L34.2387 20.6853M20.735 20.6424C20.735 20.6424 29.2809 29.1884 34.433 34.3405L20.735 20.6424Z" stroke="#3F414E" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg></View>
           <Image source={img6} 
          //  style={{marginTop:-135,marginLeft:-50}}
           ></Image>
           <Image source={img7} 
          //  style={{marginTop:-200,marginLeft:158,opacity:0.6}}
           ></Image>
</View>
           

      <View style={styles.detailsContainer}>
        <Text style={styles.songTitle}>{songDetails.title}</Text>
        <Text style={styles.artist}>{songDetails.artist}</Text>
      </View>

            <TouchableOpacity style={{width:70,height:70,borderRadius:35,
            marginTop:5,
            marginLeft:150,borderColor:'#BABCC6',borderWidth:6}}
              onPress={onButtonPressed}
             disabled={!isTrackPlayerInit}
            >
              <View style={{marginTop:-1,paddingLeft:-3}}>
                    {isPlaying ? <Image source={pause} style={{height:60,width:60,color:"white"}} />  :<Image source={play} style={{height:60,width:60,color:"white"}} />
}
                </View>
          </TouchableOpacity>
          
       {/* ................slider compo................ */}
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
      </ScrollView>
    </View>
  );
};

export default App;

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
  
 