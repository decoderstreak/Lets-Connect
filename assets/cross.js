import React from 'react';
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
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
import {View,Text} from 'react-native';

function Cross(){
    return(
       

        <Svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="54.5"  y="54.5" width="54" height="54" rx="27" transform="rotate(-180 54.5 54.5)" fill="white" stroke="#EBEAEC"/>
            <Path d="M20.5664 34.3574L34.2387 20.6853M20.735 20.6424C20.735 20.6424 29.2809 29.1884 34.433 34.3405L20.735 20.6424Z" stroke="#3F414E" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>

    )
}

export default Cross;