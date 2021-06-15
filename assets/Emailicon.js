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

function Emailicon(){
    return(
        <View>
           <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M21 2.5C21 1.125 20.055 0 18.9 0H2.1C0.945 0 0 1.125 0 2.5V17.5C0 18.875 0.945 20 2.1 20H18.9C20.055 20 21 18.875 21 17.5V2.5ZM18.9 2.5L10.5 8.7375L2.1 2.5H18.9ZM18.9 17.5H2.1V5L10.5 11.25L18.9 5V17.5Z" fill="#A0A3B1"/>
</Svg>


        </View>
    )
}

export default Emailicon;