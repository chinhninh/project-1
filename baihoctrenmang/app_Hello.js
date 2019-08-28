import React, { Component } from 'react'
import { Text, View, StyleSheet,AppRegistry, TouchableOpacity } from 'react-native'
import Hello from "./components/Hello"



export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Hello  ho = "Phan" tenDem = "Chinh" ten = "Ninh" like = {100} a = {{color : "red", backgroundColor : "yellow"}} />
        <Hello  ho = "Phan" tenDem = "Chinh" ten = "Dung" like = {100} a = {{color : "yellow", backgroundColor : "green"}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent : "center",
    alignItems : "center"
  },
  hello : {
    color : "red",
    backgroundColor: "yellow"
  }
})