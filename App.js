import React, { Component } from 'react'
import {View} from 'react-native'
import Welcome from '../Lets-Connect/welcome/Welcome.js'
// import Sadhana  from '../Lets-Connect/sadhana/Sadhana'
import Cards from './Cards/Cards.js'
import Pages from './linear/Pages.js'
import Home from '../Lets-Connect/Home/Home.js';
import Card2 from '../Lets-Connect/Card2/Card2.js'
export default class App extends Component {
  render() {
    return (
      <View>
       {/* <Welcome></Welcome> */}
       {/* <Sadhana></Sadhana> */}
       {/* <Cards></Cards> */}
        {/* <Pages></Pages> */}
        {/* <Card1></Card1> */}
        {/* <Home></Home> */}
        <Cards></Cards>
        {/* <Card2></Card2> */}
      </View>
    )
  }
}
