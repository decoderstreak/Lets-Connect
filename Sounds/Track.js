import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import TrackPlayer, {
  Capability,
  useTrackPlayerEvents,
  usePlaybackState,
  TrackPlayerEvents,
  STATE_PLAYING,
  Event,
} from 'react-native-track-player';

import songs from '../Relax/Data3';
import Controller from '../Relax/Controller3';
import SliderComp from '../Relax/slider3';
import Back from '../assets/backarrow';
import {Svg,Path,Rect,Stop,Defs,LinearGradient} from 'react-native-svg'
import storage from '@react-native-firebase/storage';
import Tra from './ss.mp3';
import play from './play1.png';
import pause from './pause1.png';
import s1 from './s1.png';
import s4 from './s4.png';
import s2 from './s2.png';
import s3 from './s3.png';
import Cross from '../assets/cross';
import {PLAYBACK_TRACK_CHANGED} from 'react-native-track-player/lib/eventTypes';

const {width, height} = Dimensions.get('window');

const TRACK_PLAYER_CONTROLS_OPTS = {
  waitforBuffer: true,
  stopWithApp: false,
  alwaysPauseOnInterruption: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    TrackPlayer.CAPABILITY_SEEK_TO,
  ],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  ],
};

export default function Player({navigation}) {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const index = useRef(0);

  const [songIndex, setSongIndex] = useState(0);

  const isItFromUser = useRef(true);

  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;
  const playbackState = usePlaybackState();

  useEffect(() => {
    scrollX.addListener(({value}) => {
      const val = Math.round(value / width);

      setSongIndex(val);
    });

    TrackPlayer.setupPlayer().then(async () => {
      // The player is ready to be used
      console.log('Player ready');
      // add the array of songs in the playlist
      await TrackPlayer.reset();
      await TrackPlayer.add(songs);
      TrackPlayer.play();
      isPlayerReady.current = true;

      await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);

      //add listener on track change
      TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, async e => {
        // console.log('song ended', e);

        const trackId = (await TrackPlayer.getCurrentTrack()) - 1; //get the current id

        // console.log('track id', trackId, 'index', index.current);
      });

    
      TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_DUCK, e => {
        // console.log(e);
        if (e.paused) {
         
          TrackPlayer.pause();
        } else {
          TrackPlayer.play();
     
        }
      });
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();

     
    };
  }, [scrollX]);

  



  return (
      <View style={{backgroundColor:"rgba(47, 129, 184, 1)"}}>
    <TouchableOpacity style={{marginTop:15,marginLeft:30}}  onPress={() => navigation.goBack()}>
   <Cross />
    </TouchableOpacity>
    <SafeAreaView style={styles.container}>
                    <SafeAreaView>
                    
                     <View style={{marginLeft:55,flex:0.5}}> 
            <Image source={s1} style={{marginTop:-90,marginLeft:-30   }}></Image>
            <Image source={s4} style={{marginTop:-140,marginLeft:130,opacity:0.6}}></Image>
            <Image source={s2} style={{marginTop:240, marginLeft:200 }} ></Image>
            <Image source={s3} style={{marginTop:-380, marginLeft:-20   }}></Image> 
            </View> 
           </SafeAreaView>
          

        <View style={{marginTop:-90}}>
        <Text style={styles.title}>{songs[songIndex].title}</Text>
       </View>

      <View style={{marginBottom:90}}>
       <Controller />
      </View>
      <View style={{marginBottom:190 }}>
      <SliderComp />
      </View>
    </SafeAreaView>
    </View>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color:"white"
  
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
  
    textTransform: 'capitalize',
  },
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: height,
    

    backgroundColor:"rgba(47, 129, 184, 1)"
  },
  header:{
    flexDirection:"row",
    paddingTop: 10,
    paddingLeft:10,
  
    height:60,

},
hcontent :{
    flexDirection:"row",
    paddingLeft:10,
    marginTop:-10

}
});