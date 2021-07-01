import React from 'react'
import { View, Text } from 'react-native'
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';
//   import React from react'
//   import { View, Text } from 'react-native'
  
  export default function ProfileIcon(props) {
      return (
        <Svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/Svg">
        <Path d="M4.32322 6.08135C4.32322 8.93999 6.75209 11.2558 9.73093 11.2558C12.7099 11.2558 5.1386 8.93293 15.1386 6.07446C15.1386 3.21582 12.7098 0.9 9.73093 0.9C6.752 0.9 4.32322 3.2159 4.32322 6.08135ZM5.96553 6.07446C5.96553 4.09983 7.64737 2.47893 9.73093 2.47893C11.8145 2.47893 13.4963 4.09983 13.4963 6.07446C13.4963 8.04896 11.8074 9.66998 9.73093 9.66998C7.65446 9.66998 5.96553 8.04896 5.96553 6.07446Z" 
        fill={props.props} stroke="#13161D" stroke-width="0.2"/>
        <Path d="M14.7543 23.225H4.70733C2.10776 23.225 0 20.9513 0 18.1471C0 15.3429 2.11654 13.0692 4.70733 13.0692H14.7543C17.3539 13.0692 19.4616 15.3524 19.4616 18.1471C19.4616 20.9419 17.3539 23.225 14.7543 23.225ZM4.70733 14.964C3.0826 14.964 1.75647 16.3945 1.75647 18.1471C1.75647 19.8998 3.0826 21.3303 4.70733 21.3303H14.7543C16.379 21.3303 17.7052 19.8998 17.7052 18.1471C17.7052 16.3945 16.379 14.964 14.7543 14.964H4.70733Z" 
        fill={props.props}/>
        </Svg>
      )
  }

