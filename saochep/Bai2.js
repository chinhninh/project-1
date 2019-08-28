import React, { PureComponent } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import {connect} from 'react-redux';
import Bai3 from './Bai3'
class Bai2 extends PureComponent {
    onDownkey () {
        this.props.dispatch({type: "DOWN"})
    }
    render() {
        return (
            <View style={styleController.controller}>
                    <Text style={styleController.controllName}>CONTROLLER COMPONENT</Text>
                    <Bai3/>
                    <View style={styleController.buttonContainer}>
                        <TouchableOpacity 
                        style={styleController.button}
                        onPress = {() =>{
                            this.props.dispatch ({type:'UP'});
                        }}
                        >
                            <Text style={styleController.buttonText}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styleController.button}
                        onPress = {this.onDownkey.bind(this)}
                        >
                            <Text style={styleController.buttonText}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

export default connect ()(Bai2)

const styleController = StyleSheet.create({
    controller: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        margin: 20
    },
    controllName: {
        fontSize: 20,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 50,
        paddingVertical: 25,
        margin: 10,
        borderRadius: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 40
    }
});
