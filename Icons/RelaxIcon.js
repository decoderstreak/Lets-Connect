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
export default function RelaxIcon(props) {
    // console.log(props);
    return (
        <Svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M11.4761 22C5.14659 22 0 16.8534 0 10.5327C0 6.03056 2.64833 1.92565 6.75325 0.071818C7.00042 -0.042943 7.28291 -0.0164596 7.51243 0.124785C7.74196 0.266029 7.8832 0.513207 7.8832 0.786867C8.01562 6.90451 13.1092 11.8922 19.2357 11.8922C20.1008 11.8922 20.966 11.7951 21.8134 11.5921C22.0694 11.5303 22.3519 11.6009 22.5461 11.7863C22.7403 11.9717 22.8286 12.2365 22.7845 12.5013C21.8311 18.0098 17.0817 22 11.4761 22ZM6.37365 2.07572C3.44283 3.8501 1.59783 7.05458 1.59783 10.5327C1.59783 15.9706 6.02937 20.4022 11.4761 20.4022C15.8988 20.4022 19.7124 17.5067 20.9395 13.3753C20.3745 13.4547 19.8007 13.49 19.2357 13.49C12.6679 13.49 7.14167 8.47585 6.37365 2.07572Z" 
        fill={props.props}/>
        </Svg>
    )
}
