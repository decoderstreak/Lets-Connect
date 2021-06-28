import React,{Component} from 'react'
import { View, Text,SafeAreaView,ScrollView,TouchableOpacity, Dimensions} from 'react-native'
import { event } from 'react-native-reanimated';
import VideoPlayer from 'react-native-video-controls';
const videos=[
    'https://r3---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1623960453&ei=JVfLYMC6J_v-4-EPt_C3-AU&ip=103.159.32.18&id=o-ALctXY9wen8COMC2j_XV6p2pdGVuUFEEcOxyStytBt1c&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C26&mn=sn-qxaeen7l%2Csn-cvh7knle&ms=au%2Conr&mv=m&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&ns=6PaeDi1sudciF4NC2CjXfFAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623938692&fvip=3&fexp=24001373%2C24007246&c=WEB&n=d6IfMJYh1op68c4je&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALumjod_zk8P4rXh7DULj8kh5muDZiM8KR93_GCB6qLVAiBYHhoYEyKkusj5hdCeGFbtYna3-A6DUvxidhXRsZYXLA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAPsdfwGCOMaUMcVETcf89nDz75gWTCDDcLMbqtV1KUoOAiEAm9B0J0Esl-MwmYvLdHKns2QzqQjXSrDDDZYF1aXKHeA%3D',
    'https://r3---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1623960453&ei=JVfLYMC6J_v-4-EPt_C3-AU&ip=103.159.32.18&id=o-ALctXY9wen8COMC2j_XV6p2pdGVuUFEEcOxyStytBt1c&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C26&mn=sn-qxaeen7l%2Csn-cvh7knle&ms=au%2Conr&mv=m&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&ns=6PaeDi1sudciF4NC2CjXfFAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623938692&fvip=3&fexp=24001373%2C24007246&c=WEB&n=d6IfMJYh1op68c4je&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALumjod_zk8P4rXh7DULj8kh5muDZiM8KR93_GCB6qLVAiBYHhoYEyKkusj5hdCeGFbtYna3-A6DUvxidhXRsZYXLA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAPsdfwGCOMaUMcVETcf89nDz75gWTCDDcLMbqtV1KUoOAiEAm9B0J0Esl-MwmYvLdHKns2QzqQjXSrDDDZYF1aXKHeA%3D',
    'https://r3---sn-qxaeen7l.googlevideo.com/videoplayback?expire=1623960453&ei=JVfLYMC6J_v-4-EPt_C3-AU&ip=103.159.32.18&id=o-ALctXY9wen8COMC2j_XV6p2pdGVuUFEEcOxyStytBt1c&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C26&mn=sn-qxaeen7l%2Csn-cvh7knle&ms=au%2Conr&mv=m&mvi=3&pl=24&vprv=1&mime=video%2Fmp4&ns=6PaeDi1sudciF4NC2CjXfFAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1623938692&fvip=3&fexp=24001373%2C24007246&c=WEB&n=d6IfMJYh1op68c4je&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhALumjod_zk8P4rXh7DULj8kh5muDZiM8KR93_GCB6qLVAiBYHhoYEyKkusj5hdCeGFbtYna3-A6DUvxidhXRsZYXLA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAPsdfwGCOMaUMcVETcf89nDz75gWTCDDcLMbqtV1KUoOAiEAm9B0J0Esl-MwmYvLdHKns2QzqQjXSrDDDZYF1aXKHeA%3D',
    ]
  const vids=[
  'https://r4---sn-qxaeen7e.googlevideo.com/videoplayback?expire=1623960698&ei=GljLYKTwFub7juMPoaKw8A0&ip=103.159.32.18&id=o-AGJ86xd9DKx8v9svOrULLM5OtNlhZvPwaCAXmqjCT-5l&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C26&mn=sn-qxaeen7e%2Csn-cvh7knek&ms=au%2Conr&mv=m&mvi=4&pl=24&vprv=1&mime=video%2Fmp4&ns=Q8tqDhV4VunG1SEjrYy7Bk0F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623938935&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=YHYLExZext5EgIvoB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgS2JjNGW6p27SnjG-ANoNCeTLo70nsY-I0HFkDgpP414CIQD0SCdSLXDpa73daoYz1qOXKp3vKuLA2GiATfDxp12HSA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgXsA0AqK-UZBHtWkIhB8qkph7i38RJMlkW9eKv5R0jNMCIDYVBTe9UtxvuIHmGmZifPwiQ62EXK1zAQJDKFw14yGj',  
  'https://r4---sn-qxaeen7e.googlevideo.com/videoplayback?expire=1623960698&ei=GljLYKTwFub7juMPoaKw8A0&ip=103.159.32.18&id=o-AGJ86xd9DKx8v9svOrULLM5OtNlhZvPwaCAXmqjCT-5l&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C26&mn=sn-qxaeen7e%2Csn-cvh7knek&ms=au%2Conr&mv=m&mvi=4&pl=24&vprv=1&mime=video%2Fmp4&ns=Q8tqDhV4VunG1SEjrYy7Bk0F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623938935&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=YHYLExZext5EgIvoB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgS2JjNGW6p27SnjG-ANoNCeTLo70nsY-I0HFkDgpP414CIQD0SCdSLXDpa73daoYz1qOXKp3vKuLA2GiATfDxp12HSA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgXsA0AqK-UZBHtWkIhB8qkph7i38RJMlkW9eKv5R0jNMCIDYVBTe9UtxvuIHmGmZifPwiQ62EXK1zAQJDKFw14yGj',  
  'https://r4---sn-qxaeen7e.googlevideo.com/videoplayback?expire=1623960698&ei=GljLYKTwFub7juMPoaKw8A0&ip=103.159.32.18&id=o-AGJ86xd9DKx8v9svOrULLM5OtNlhZvPwaCAXmqjCT-5l&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C26&mn=sn-qxaeen7e%2Csn-cvh7knek&ms=au%2Conr&mv=m&mvi=4&pl=24&vprv=1&mime=video%2Fmp4&ns=Q8tqDhV4VunG1SEjrYy7Bk0F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1623938935&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5432434&n=YHYLExZext5EgIvoB&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIgS2JjNGW6p27SnjG-ANoNCeTLo70nsY-I0HFkDgpP414CIQD0SCdSLXDpa73daoYz1qOXKp3vKuLA2GiATfDxp12HSA%3D%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRAIgXsA0AqK-UZBHtWkIhB8qkph7i38RJMlkW9eKv5R0jNMCIDYVBTe9UtxvuIHmGmZifPwiQ62EXK1zAQJDKFw14yGj',  
  ]
export default class ScrollingTest extends Component {
    threshold=150;
    constructor(props) {
        super(props)
    
        this.state = {
             paused1:false,
             muted1:true,
             position1:{start:null,end:null},
             paused2:false,
             muted2:true,
             position2:{start:null,end:null},
        }
    }
    onVedioLayout1=event=>{
        const {width1}=Dimensions.get('window')
        this.state.position1.start= -(
            event.nativeEvent.layout.x
            -width1
            +this.threshold
            )
        
        {console.log(event.nativeEvent.layout.x,"this is layout");}
        {console.log(this.state.position1.start,"this is start");}
        this.state.position1.end=
        event.nativeEvent.layout.x
        +event.nativeEvent.layout.width
        -this.threshold
        {console.log(this.state.position1.end,"this is end");}
    }
    onScroll1=event=>{
         const scrollPosition1=event.nativeEvent.contentOffset.x;
         const paused1=this.state.paused1
         const {start,end}=this.state.position1
         {console.log('scroll positon1 is',scrollPosition1);}
         {console.log(this.state.position1.start,"this is start");}
         {console.log(this.state.position1.end,"this is end");}
         if(scrollPosition1>24 && scrollPosition1<800 )
         {
            this.setState({
                paused1:true
            })
         }
         else{
             this.setState({
                 paused1:false
             })
         }
    }
    onVedioLayout2=event=>{
        const {width2}=Dimensions.get('window')
        this.state.position2.start= -(
            event.nativeEvent.layout.x
            -width2
            +this.threshold
            )
        
        {console.log(event.nativeEvent.layout.x,"this is layout");}
        {console.log(this.state.position2.start,"this is start");}
        this.state.position2.end=
        event.nativeEvent.layout.x
        +event.nativeEvent.layout.width
        -this.threshold
        {console.log(this.state.position2.end,"this is end");}
    }
    onScroll2=event=>{
        const scrollPosition2=event.nativeEvent.contentOffset.x;
        const paused2=this.state.paused2
        const {start,end}=this.state.position2
        {console.log('scroll positon1 is',scrollPosition2);}
        {console.log(this.state.position2.start,"this is start");}
        {console.log(this.state.position2.end,"this is end");}
        if(scrollPosition2>24 && scrollPosition2<800 )
        {
           this.setState({
               paused2:true
           })
        }
        else{
            this.setState({
                paused2:false
            })
        }
    }
   
    render() {
        
        return (
        <SafeAreaView style={{flex:1}}>
{/* -------------------------------------------------section-1----------------------------------------------------- */}
         <ScrollView horizontal={true} scrollEventThrottle={16} onScroll={this.onScroll1} >
{/* -----------------------------------------------1/1-video------------------------------------------------------------ */}
                <View 
                style={{
                    height:200,
                    // marginLeft:10,
                    marginRight:10
                    }}>
            <VideoPlayer
                    playInBackground={false}
                    onLayout={this.onVedioLayout1}
                    paused={this.state.paused1}
                    source={{ uri:'https://r6---sn-ci5gup-8b5l.googlevideo.com/videoplayback?expire=1624207966&ei=_h3PYJ_2F5fL4-EPlJy6mA8&ip=103.159.33.76&id=o-AObqliUtaVbpZdmT4YP3A2MgbceBtID2ORQ8E17XVfRk&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C29&mn=sn-ci5gup-8b5l%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=6&pl=24&initcwndbps=1595000&vprv=1&mime=video%2Fmp4&ns=T8hEqKfB1B6xFB2Haa5hoGAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1624185644&fvip=6&fexp=24001373%2C24007246&beids=9466588&c=WEB&n=_OHXJNe9soKGf1R3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMxycr9ylLrIrcoDJ4OCkHhO4ZbPON--hQM0PDqUtN6UCIGisTEuuMmvm3dcJwYlod6yaQzFrewYQFlzfQwWs_m6b&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAODFJxfSHg1n_KBIzVzXB3NlqIMyQhI76hvesKeutgjmAiEA4r03Si8-wIf3sySUtB0jRbOQvw5nplu_daGUeUX_xF8%3D'}}
                    style={{ width:320,height:100, resizeMode: 'contain', borderRadius: 10 ,marginLeft:10}}>
            </VideoPlayer>
            </View>
{/* ----------------------------------------1/2-video------------------------------------------------------ */}
            <View>
                <ScrollView horizontal={true} 
                >
                <View 
                style={{
                    height:200,
                    // marginLeft:10,
                    marginRight:10
                    }}>
            <VideoPlayer
                    playInBackground={false}
                    paused={true}
                    source={{ uri:'https://r6---sn-ci5gup-8b5l.googlevideo.com/videoplayback?expire=1624207966&ei=_h3PYJ_2F5fL4-EPlJy6mA8&ip=103.159.33.76&id=o-AObqliUtaVbpZdmT4YP3A2MgbceBtID2ORQ8E17XVfRk&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C29&mn=sn-ci5gup-8b5l%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=6&pl=24&initcwndbps=1595000&vprv=1&mime=video%2Fmp4&ns=T8hEqKfB1B6xFB2Haa5hoGAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1624185644&fvip=6&fexp=24001373%2C24007246&beids=9466588&c=WEB&n=_OHXJNe9soKGf1R3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMxycr9ylLrIrcoDJ4OCkHhO4ZbPON--hQM0PDqUtN6UCIGisTEuuMmvm3dcJwYlod6yaQzFrewYQFlzfQwWs_m6b&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAODFJxfSHg1n_KBIzVzXB3NlqIMyQhI76hvesKeutgjmAiEA4r03Si8-wIf3sySUtB0jRbOQvw5nplu_daGUeUX_xF8%3D'}}
                    style={{ width:320,height:200, resizeMode: 'cover', borderRadius: 10 ,marginLeft:10}}>
            </VideoPlayer>
            </View>
            </ScrollView>
            </View>
{/* ------------------------------------------------1/3-video-------------------------------------------- */}
            <View>
                <ScrollView horizontal={true} 
                >
                <View 
                style={{
                    height:200,
                    // marginLeft:10,
                    marginRight:10
                    }}>
            <VideoPlayer
                    playInBackground={false}
                    onLayout={this.onVedioLayout2}
                    paused={true}
                    source={{ uri:'https://r6---sn-ci5gup-8b5l.googlevideo.com/videoplayback?expire=1624207966&ei=_h3PYJ_2F5fL4-EPlJy6mA8&ip=103.159.33.76&id=o-AObqliUtaVbpZdmT4YP3A2MgbceBtID2ORQ8E17XVfRk&itag=22&source=youtube&requiressl=yes&mh=Z6&mm=31%2C29&mn=sn-ci5gup-8b5l%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=6&pl=24&initcwndbps=1595000&vprv=1&mime=video%2Fmp4&ns=T8hEqKfB1B6xFB2Haa5hoGAF&cnr=14&ratebypass=yes&dur=67.453&lmt=1476561022666829&mt=1624185644&fvip=6&fexp=24001373%2C24007246&beids=9466588&c=WEB&n=_OHXJNe9soKGf1R3w&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgMxycr9ylLrIrcoDJ4OCkHhO4ZbPON--hQM0PDqUtN6UCIGisTEuuMmvm3dcJwYlod6yaQzFrewYQFlzfQwWs_m6b&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAODFJxfSHg1n_KBIzVzXB3NlqIMyQhI76hvesKeutgjmAiEA4r03Si8-wIf3sySUtB0jRbOQvw5nplu_daGUeUX_xF8%3D'}}
                    style={{ width:320,height:200, resizeMode: 'cover', borderRadius: 10 ,marginLeft:10}}>
            </VideoPlayer>
            </View>
            </ScrollView>
            </View> 

            </ScrollView>
{/* --------------------------------------------------section-2--------------------------------------- */}
<ScrollView horizontal={true} scrollEventThrottle={16} onScroll={this.onScroll2} style={{marginTop:10}} >
{/* -----------------------------------------------2/1-video------------------------------------------------------------ */}
                <View 
                style={{
                    height:200,
                    // marginTop:10,
                    // marginLeft:10,
                    marginRight:10
                    }}>
            <VideoPlayer
                    playInBackground={false}
                    onLayout={this.onVedioLayout2}
                    paused={this.state.paused2}
                    source={{ uri:'https://r7---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1624208128&ei=oB7PYMSBIub64-EPz4WY6A0&ip=103.159.33.75&id=o-AGD9817SOAFfP8x4Horb_XeoVnW5z_k9jysIYjUA0R-n&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=1243750&vprv=1&mime=video%2Fmp4&ns=BcyEWlE-3MccX6f-0nYHF80F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1624185644&fvip=7&fexp=24001373%2C24007246&beids=9466588&c=WEB&txp=5432434&n=yOTlN58uMb6aXRem8&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBEhIhxYxinWe3a8_FGuFrasr7avDYGw-98eV4aKBJGUCIFB1gi_ACwuveLQqf8oyKI6eHCHcFU_i3hnmQb3_F1A3&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAIPYwXhBUVVbxkR31rdf_B0hwAkmJADUem5ZxlMpOnwsAiAf0rRc90V29Mr81RMI3WSIpNArL-6Szlu9yA4NS-xxvw%3D%3D'}}
                    style={{ width:320,height:200, resizeMode: 'cover', borderRadius: 10 ,marginLeft:10}}>
            </VideoPlayer>
            </View>
{/* ----------------------------------------2/2-video------------------------------------------------------ */}
            <View >
                <ScrollView horizontal={true} >
                <View 
                style={{
                    height:200,
                    // marginLeft:10,
                    marginRight:10
                    }}>
            <VideoPlayer
                    playInBackground={false}
                    paused={true}
                    source={{ uri:'https://r7---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1624208128&ei=oB7PYMSBIub64-EPz4WY6A0&ip=103.159.33.75&id=o-AGD9817SOAFfP8x4Horb_XeoVnW5z_k9jysIYjUA0R-n&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=1243750&vprv=1&mime=video%2Fmp4&ns=BcyEWlE-3MccX6f-0nYHF80F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1624185644&fvip=7&fexp=24001373%2C24007246&beids=9466588&c=WEB&txp=5432434&n=yOTlN58uMb6aXRem8&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBEhIhxYxinWe3a8_FGuFrasr7avDYGw-98eV4aKBJGUCIFB1gi_ACwuveLQqf8oyKI6eHCHcFU_i3hnmQb3_F1A3&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAIPYwXhBUVVbxkR31rdf_B0hwAkmJADUem5ZxlMpOnwsAiAf0rRc90V29Mr81RMI3WSIpNArL-6Szlu9yA4NS-xxvw%3D%3D'}}
                    style={{ width:320,height:200, resizeMode: 'cover', borderRadius: 10 ,marginLeft:10}}>
            </VideoPlayer>
            </View>
            </ScrollView>
            </View>
{/* ------------------------------------------------2/3-video-------------------------------------------- */}
            <View>
                <ScrollView horizontal={true} 
                >
                <View 
                style={{
                    height:200,
                    // marginLeft:10,
                    marginRight:10
                    }}>
            <VideoPlayer
                    playInBackground={false}
                    pauseOnPress={false}
                    // onLayout={this.onVedioLayout2}
                    paused={true}
                    source={{ uri:'https://r7---sn-ci5gup-8b5e.googlevideo.com/videoplayback?expire=1624208128&ei=oB7PYMSBIub64-EPz4WY6A0&ip=103.159.33.75&id=o-AGD9817SOAFfP8x4Horb_XeoVnW5z_k9jysIYjUA0R-n&itag=22&source=youtube&requiressl=yes&mh=XH&mm=31%2C29&mn=sn-ci5gup-8b5e%2Csn-ci5gup-h55d&ms=au%2Crdu&mv=m&mvi=7&pl=24&initcwndbps=1243750&vprv=1&mime=video%2Fmp4&ns=BcyEWlE-3MccX6f-0nYHF80F&ratebypass=yes&dur=629.934&lmt=1607146858586311&mt=1624185644&fvip=7&fexp=24001373%2C24007246&beids=9466588&c=WEB&txp=5432434&n=yOTlN58uMb6aXRem8&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgBEhIhxYxinWe3a8_FGuFrasr7avDYGw-98eV4aKBJGUCIFB1gi_ACwuveLQqf8oyKI6eHCHcFU_i3hnmQb3_F1A3&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAIPYwXhBUVVbxkR31rdf_B0hwAkmJADUem5ZxlMpOnwsAiAf0rRc90V29Mr81RMI3WSIpNArL-6Szlu9yA4NS-xxvw%3D%3D'}}
                     style={{ width:320,height:300, resizeMode: 'cover', borderRadius: 10 ,marginLeft:10}}>
            </VideoPlayer>
            </View>
            </ScrollView>
            </View> 
            </ScrollView>
            </SafeAreaView>
        )
    }
}

