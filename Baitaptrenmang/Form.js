import React, { Component } from 'react'
import { Text, View,TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import {connect} from 'react-redux'
class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            en: '',
            vn: ''
        };
        this.onAdd = this.onAdd.bind(this);

    }
    onAdd(){
        const {en,vn} = this.state;
        this.props.dispatch({
            type: 'ADD_word',
            en,
            vn
        })
    }
    render() {
        return (
            <View style ={styles.container}>
                <TextInput 
                     style={styles.textInput}
                     value = {this.state.en}
                     onChangeText={text =>this.setState({en: text})}
                     placeholder='English Word'
                     />
                <TextInput 
                    style={styles.textInput}
                    value ={this.state.vn}
                    onChangeText={text =>this.setState({vn: text})}
                    placeholder='vienamese'
                     />
                <TouchableOpacity onPress = {this.onAdd}>
                        <Text>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Form)

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 50,
        width: 300,
        backgroundColor: "green",
        margin: 10,
        paddingHorizontal: 10,

    }
})
