import React, { Component } from 'react'
import { Text, View,ScrollView,Image,TextInput,Dimensions,AppRegistry } from 'react-native'

export default class Robot extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return ( 
           <ScrollView>
               <Image
               source= {require('../Images/19 - trWJ4KR.jpg')}
               style ={{width:screenWidth,height:screenWidth*4608/2880}}
               ></Image>
           </ScrollView>
        )
    }
}
