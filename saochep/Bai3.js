import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux';

class Bai3 extends Component {
  render() {
    const color = this.props.highlight ? 'black' : 'red';
    return (
      <TouchableOpacity onPress = {() =>{
        this.props.dispatch({type: 'CHANGE_COLOR'})
      }}>
        <Text style ={{color}}>Change Color</Text>
      </TouchableOpacity>
    )
  }
}

export default connect(function(state){
  return { highlight: state.highlight}
})(Bai3);
// onPress ={() =>{
//   this.props.dispatch({type: 'CHANGE_COLOR'})
// }}