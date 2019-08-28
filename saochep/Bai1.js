import React, { PureComponent } from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import Bai2 from './Bai2';
import { connect} from 'react-redux';
class Bai1 extends PureComponent {
  render() {
    const color = this.props.myHighlight ? 'red' : 'white';
    return (
      <View style={styleApp.container}>
                <View style={styleApp.header}>
                    <Text style={styleApp.appName}>EXAM 1: {'\n'}APP COMPONENT</Text>
                    <Text style={{fontSize: 40, color}}>{this.props.myValue}</Text>
                </View>
                
                <Bai2/>
            </View>
        );
    }
}

function mapStateToProps(state){
return {
  myHighlight: state.highlight,
  myValue: state.value}
}
export default connect(mapStateToProps)(Bai1);

const styleApp = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingTop: 30
    },
    header: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
});

