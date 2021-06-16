import React, { useState, useRef } from 'react';
import { StyleSheet, View, Platform ,ScrollView} from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';

const VideoPlayer = () => {
    
    
    const video = require('../Home/Video.mp4');
    
    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };

    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };

    return (
        <ScrollView>
        <View>
            <Video
                onEnd={onEnd}
                onLoad={onLoad}
                onLoadStart={onLoadStart}
                // posterResizeMode={'cover'}
                onProgress={onProgress}
                paused={paused}
                ref={(ref) => (videoPlayer.current = ref)}
                // resizeMode={'cover'}
                source={video}
                style={styles.backgroundVideo}
            />
            <MediaControls
                isFullScreen={false}
                duration={duration}
                isLoading={isLoading}
                progress={currentTime}
                onPaused={onPaused}
                onReplay={onReplay}
                // onSeek={onSeek}
                // onSeeking={onSeeking}
                mainColor={"black"}
                playerState={playerState}
                // sliderStyle={{ containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
                style={{marginTop:-80}}
            />
        </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: 300,
        width: 340,
        marginLeft:25,
        marginTop:20
    },
    mediaControls: {
        height: 100,
        flex: 1,
        marginTop:-30
        
    },
});

export default VideoPlayer;