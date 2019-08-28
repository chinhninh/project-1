import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
class Header extends Component {
    render() {
        return (
         <View style= {styles.header}>
            <Text/>
            <Text>MY WORDS</Text>
            <TouchableOpacity onPress ={() => this.props.dispatch({type: 'TOGGLE_IS_ADDING' })}>
                 <Text>+</Text>
            </TouchableOpacity>
            
        </View>
        )
    }
}

export default connect()(Header);

const styles = StyleSheet.create({
    header:{
        flex: 1,backgroundColor: 'red',
     justifyContent:'space-between',
     alignItems: 'center',
    flexDirection: 'row',
paddingHorizontal: 30}
})
