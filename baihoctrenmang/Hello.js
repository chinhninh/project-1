// import React, { PureComponent } from 'react'
// import { Text, View, StyleSheet,AppRegistry, TouchableOpacity } from 'react-native'

// export default class Hello extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = props;
//   }
//   a() {
//     this.setState({like : this.state.like +1});
//   }
//   render() {
//     console.log('Re-render');
//     return(
//       <TouchableOpacity onPress = {this.a.bind(this)}         >
//      <View >
//           <Text style = {styles.welcome}> ten: {this.state.name1} , like: {this.state.like}</Text>
//       </View>
//       </TouchableOpacity>
//     )
//   }
// }

// const styles = StyleSheet.create({
//     container : {
//       flex : 1,
//       justifyContent : "center",
//       alignItems : "center"
      
      
//     },
//     welcome : {
//       fontSize : 20,
//       color : "blue",
//       backgroundColor : "red"
  
   
      
//     }
// });




import React, { PureComponent } from 'react'
import { Text, View, StyleSheet,AppRegistry, TouchableOpacity } from 'react-native'

export default class Hello extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <TouchableOpacity onPress = {() =>{
        this.setState({like : this.state.like + 1})
      }}>
          <View>
            <Text style = {[styles.hello, {...this.props.a}]} >
            {this.props.ho} {this.props.tenDem} {this.props.ten}, like: {this.state.like} </Text>
          </View>
      </TouchableOpacity>
         
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
  