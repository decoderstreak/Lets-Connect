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
export default function MentorIcon(props) {
    return (
<Svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M4.32322 6.31132C4.32322 9.29253 6.74787 11.7154 9.73094 11.7154C12.7142 11.7154 15.1387 9.28514 15.1387 6.30412C15.1387 3.32291 12.714 0.9 9.73094 0.9C6.74778 0.9 4.32322 3.323 4.32322 6.31132ZM5.96553 6.30412C5.96553 4.23332 7.6516 2.54134 9.73094 2.54134C11.8103 2.54134 13.4963 4.23332 13.4963 6.30412C13.4963 8.37479 11.8032 10.0669 9.73094 10.0669C7.65869 10.0669 5.96553 8.37479 5.96553 6.30412Z" 
fill={props.props} />
<Path d="M14.7543 24.0001H4.70733C2.10776 24.0001 0 21.6235 0 18.6924C0 15.7612 2.11654 13.3846 4.70733 13.3846H14.7543C17.3539 13.3846 19.4616 15.7711 19.4616 18.6924C19.4616 21.6136 17.3539 24.0001 14.7543 24.0001ZM4.70733 15.3651C3.0826 15.3651 1.75646 16.8604 1.75646 18.6924C1.75646 20.5243 3.0826 22.0196 4.70733 22.0196H14.7543C16.379 22.0196 17.7052 20.5243 17.7052 18.6924C17.7052 16.8604 16.379 15.3651 14.7543 15.3651H4.70733Z" 
fill={props.props}/>
</Svg>
    )
}
