// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// class Blink extends Component {
//     constructor(props){
//         super(props);
//         this.state = {showText : true}
    
//         var taskTodo = ( ) => {
//             this.setState(previousState =>{
//                 return{
//                     showText : !previousState.showText
//                 };
//             });
//         };
//     const timeToBlink =200;
//     setInterval( taskTodo, timeToBlink )
//     };
//     render() {
//         let textToDisplay = this.state.showText ? this.props.inputText : ' ';
//         return (
//            <Text>{textToDisplay}</Text>
//         )
//     }
// }

// export default class TextBlink extends Component {
//     render() {
//         return (
//             <View style ={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
//                 <Blink inputText = 'Hello, how are you'></Blink>
//                 <Blink inputText = 'i am fine, thank you'></Blink>

//             </View>
//         )
//     }
// }


import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {showText : true};
        var tackToDo = () =>{
            this.setState(previousState =>{
                return{
                    showText:!previousState.showText
                }
               
            })
        };
        const timeToBlink = 400;
        setInterval(tackToDo,timeToBlink);
    }
    render() {
        const textToDisplay = this.state.showText ? this.props.InputText : '';
        return (
            <View>
                <Text> {textToDisplay} </Text>
            </View>
        )
    }
}


export default class TextBlink extends Component{
    render(){
        return(
            <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Blink InputText = "Hello, what your name"></Blink>
                <Blink InputText = "Hello, what your name"></Blink>
                <Blink InputText = "Hello, what your name"></Blink>


            </View>
        )
    }
}
