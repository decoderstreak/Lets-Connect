import React, { useState, useRef,useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ImageRequireSource ,Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import play from '../Sounds/play1.png';
import pause from '../Sounds/pause1.png';
import TrackPlayer, {
  usePlaybackState,
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

export default function Controller({onNext, onPrv}) {
  const playbackState = usePlaybackState();
  const isPlaying = useRef('paused'); //paused play loading

  useEffect(() => {
    console.log('Player State', playbackState);

    //set the player state
    if (playbackState === 'playing' || playbackState === 3) {
      isPlaying.current = 'playing';
    } else if (playbackState === 'paused' || playbackState === 2) {
      isPlaying.current = 'paused';
    } else {
      isPlaying.current = 'loading';
    }
  }, [playbackState]);

  const returnPlayBtn = () => {
    switch (isPlaying.current) {
      case 'playing':
        return <Image source={pause} style={{height:60,width:60,color:"white"}} />;
      case 'paused':
        return <Image source={play} style={{height:60,width:60,color:"white"}} />;
      default:
        return <ActivityIndicator size={45} color="#fff" />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying.current === 'playing') {
      TrackPlayer.pause();
    } else if (isPlaying.current === 'paused') {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPlayPause} style={{width:70,height:70,borderRadius:35,marginTop:55,borderColor:'#BABCC6',borderWidth:6}}>
        {returnPlayBtn()}
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 250,
    // marginTop:-120
  },
});