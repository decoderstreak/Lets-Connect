// import React from 'react'
// import { View, Text } from 'react-native'
// import YouTubePlayer from "react-native-youtube-sdk";

//  function Youtube({route,navigation}) {
//      console.log(route);
//     return (
//         <View>
// <YouTubePlayer
//   ref={ref => (this.youTubePlayer = ref)}
//   videoId="1dpyHY--bVQ"
//   autoPlay={true}
//   fullscreen={true}
//   showFullScreenButton={true}
//   showSeekBar={true}
//   showPlayPauseButton={true}
//   startTime={5}
//   style={{ width: "100%", height: 200 }}
//   onError={e => console.log(e)}
//   onChangeState={e => console.log(e)}
//   onChangeFullscreen={e => console.log(e)}
// />
//             {/* <Text></Text> */}
//         </View>
//     )
// }
// export default Youtube
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import YouTubePlayer from "react-native-youtube-sdk";
export default class YouTube extends Component {
    render() {
        console.log('video params is',this.props.route.params.id);
        return (
            <View>
<YouTubePlayer
  ref={ref => (this.youTubePlayer = ref)}
  videoId={this.props.route.params.id}
  autoPlay={true}
  fullscreen={true}
  showFullScreenButton={true}
  showSeekBar={true}
  showPlayPauseButton={true}
  startTime={5}
  style={{ width: "100%", height: 200 }}
  onError={e => console.log(e)}
  onChangeState={e => console.log(e)}
  onChangeFullscreen={e => console.log(e)}
/>
                {/* <Text> textInComponent </Text> */}
            </View>
        )
    }
}
