import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, StyleSheet ,fixed} from 'react-native'
import profile from '../Home/Profile.png';
import { Svg, Path } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import home from '../Home/Development.png';
import program from '../Home/Programing.png'
import imgee from '../Home/circle.png';
import imgee2 from '../Home/Arrow.png'
import photo from '../Home/Sir.png';
const { width } = Dimensions.get("window");
const height = width * 0.50;
const images = [
  'https://st1.latestly.com/wp-content/uploads/2019/07/02-3-1.jpg',
  'https://www.quotationof.com/images/dennis-ritchies-quotes-5.jpg',
  'https://im.indiatimes.in/content/itimes/photo/2016/May/13/1463126042-mark-zuckerberg-top-quotes-ever.jpg'
]
const img = [
  'https://i.ytimg.com/vi/6z59uHuwIJg/maxresdefault.jpg',
  'https://i.ytimg.com/vi/uZno9WHRiG0/maxresdefault.jpg',
  'https://i.ytimg.com/vi/nXyQUOmJ6BU/maxresdefault.jpg',
  // 'https://youtu.be/aqlN3O4xP-s'
]
const url = 'https://youtu.be/aqlN3O4xP-s'
export default class Home extends Component {
  state = {
    active: 0
  }
  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  }
  videoBuffer = (isBuffer) => {
    console.log(isBuffer)
  }
  render() {
    return (
      <ScrollView>
        <View style={{  backgroundColor: 'white' }}>
          <View style={{}}>
          <Text style={{ fontSize: 26, marginLeft: 28, marginTop: 55 }}>Let's Connect </Text>
          <Image source={profile} style={{ marginLeft: 310, marginTop: -25 }}></Image>
          <View style={{ marginTop: -22, marginLeft: 350 }}>
            <Svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 21.8234C11.8292 21.8234 12.9167 20.8188 12.9167 19.5911H8.08337C8.08337 20.8188 9.17087 21.8234 10.5 21.8234ZM17.75 15.1265V9.54571C17.75 6.11912 15.7805 3.25061 12.3125 2.49162V1.73264C12.3125 0.806233 11.503 0.0584106 10.5 0.0584106C9.49713 0.0584106 8.68754 0.806233 8.68754 1.73264V2.49162C5.23171 3.25061 3.25004 6.10796 3.25004 9.54571V15.1265L0.833374 17.3588V18.4749H20.1667V17.3588L17.75 15.1265ZM15.3334 16.2426H5.66674V9.5457C5.66674 6.77764 7.49133 4.52301 10.5001 4.52301C13.5088 4.52301 15.3334 6.77764 15.3334 9.5457V16.2426Z" fill="#0C0D0E" />
            </Svg></View>
            </View>
          <View>
            <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#90bcda', '#608BC5', '#116faf', '#116faf',]} style={{ width:330, height: 80, borderRadius: 20, marginLeft: 7, marginTop: 54 }}></LinearGradient>
          </View>
          <Text style={{ fontSize: 18, marginLeft: 26, marginTop: 35 }}>Techify</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: 157, height: 177, borderRadius: 15, borderWidth: 2, borderColor: '#608bc5', marginLeft: 31, marginTop: 39 }}>
              <ImageBackground source={home} style={{ width: 157, height: 177, marginLeft: -2, marginTop: -2 }}>
                <Text style={{ color: 'white', fontSize: 22, marginLeft: 10, marginTop: 120 }}>Development</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 157, height: 177, borderRadius: 15, borderWidth: 2, borderColor: '#608bc5', marginLeft: 20, marginTop: 39 }}>
              <ImageBackground source={program} style={{ width: 157, height: 177, marginLeft: -2, marginTop: -2 }}>
                <Text style={{ color: 'white', fontSize: 22, marginLeft: 10, marginTop: 120 }}>Programming</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20, width: 59, height, borderRadius: 5 }}>
            <ScrollView
              pagingEnabled
              horizontal
              onScroll={this.change}
              showsHorizontalScrollIndicator={false}
              style={{ width, height }}>
              {
                images.map((image, index) => (
                  <Image
                    key={index}
                    source={{ uri: image }}
                    style={{ width, height, resizeMode: 'contain', borderRadius: 10 }}></Image>
                ))
              }
            </ScrollView>
          </View>
          <View style={{ flexDirection: 'row', bottom: 0, alignSelf: 'center', margin: 6 }}>
            {
              images.map((i, k) => (
                <Text key={k} style={k == this.state.active ? style.padingActiveText : style.padingText}>⬤</Text>
              ))
            }
          </View>
          <View><Text style={{ marginLeft: 26, marginTop: 21, fontSize: 18 }}>Connect with inner core</Text>
            <View style={{ marginTop: 20, width, height, borderRadius: 5 }}>
              <ScrollView
                pagingEnabled
                horizontal
                onScroll={this.change}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}>
                {
                  img.map((image, index) => (
                    <Image
                      key={index}
                      source={{ uri: image }}
                      style={{ width, height, resizeMode: 'contain', borderRadius: 10 }}></Image>
                  ))
                }
              </ScrollView>
            </View>
            <View style={{ flexDirection: 'row', bottom: 0, alignSelf: 'center', margin: 6 }}>
              {
                img.map((i, k) => (
                  <Text key={k} style={k == this.state.active ? style.padingActiveText : style.padingText}>⬤</Text>
                ))
              }
            </View>
          </View>
          <View><Text style={{ fontSize: 18, marginLeft: 23, marginTop: 21 }}>Connect with Dazzlers</Text>
            <TouchableOpacity>
              <Image source={imgee} style={{ marginTop: -30, marginLeft: 310, width: 38, height: 38 }}></Image>
              <Image source={imgee2} style={{ marginTop: -38, marginLeft: 314, color: '#A7ACC8' }}></Image>

              <Text style={{ color: '#A7ACC8', fontSize: 12, marginLeft: 310, marginTop: 4 }}>see all</Text>
            </TouchableOpacity>
            <View>
              <View style={{ marginTop: 50, width, height: 256 }}>
                <ScrollView horizontal
                  showsHorizontalScrollIndicator={false}>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={photo}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -0.5 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 14 }}>B.Sudarshan sir</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={photo}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -0.5 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>Viswanath Murthy</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={{ uri: 'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -1 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>Viswanath Murthy</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                  <View style={{ height: 207, width: 152, marginLeft: 20, borderWidth: 2, borderColor: '#116faf', borderRadius: 9 }}>
                    <Image
                      source={{ uri: 'https://images.pexels.com/photos/4916161/pexels-photo-4916161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', }}
                      style={{ width: 149, height: 126, borderRadius: 5, marginLeft: -1 }}>
                    </Image>
                    <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 14 }}>Viswanath Murthy</Text>
                    <Text style={{ textAlign: 'center', fontSize: 10, textAlign: 'justify', padding: 18 }}>
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    )
  }
}
const style = StyleSheet.create({
  padingText: {
    color: '#888',
    padding: 3,
    margin: 3,
    fontSize: (width / 30)
  },
  padingActiveText: {
    color: 'black',
    padding: 3,
    margin: 3,
    fontSize: (width / 30),
  }
})