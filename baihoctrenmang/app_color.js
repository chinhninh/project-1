import React, { Component } from 'react'
import { Text, View,StyleSheet,Slider,TextInput } from 'react-native'
// import { compileFunction } from 'vm';

class ColorControl extends Component{
  constructor(props){
    super(props);
    this.state=props
  }
  render(){
    return(
      <View style ={{flex:1, flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <Text>{this.state.title}</Text>
      <Slider onValueChange = {(val)=>{
        this.setState({value:val})
      }}
      value = {this.state.value} step = {1} maximumValue = {255} minimumValue = {0} style={{width:200}}/>
      <TextInput value = {`${this.state.value}`} style={styles.TextInput}/>
      </View>
    )
  }
}
export default class App extends Component {
  RenderHeader = () =>{
    return(
    <View style = {styles.Header}>   
    <Text style ={{fontSize:25}}>Color Picker</Text>
  </View>
    )}
  
  render() {
    return (
      <View style = {{backgroundColor:"white"}}>
       
          {this.RenderHeader()}

        <View style = {{height:220, backgroundColor: "white",marginLeft:30,marginTop:50,marginRight:30}}>
           <ColorControl title ="R" value ={100}/>
           <ColorControl title ="G" value ={150}/>
           <ColorControl title ="B" value ={200}/>  
        </View>
        <View style = {{height:220,marginBottom:30, backgroundColor: "yellow",marginLeft:30,marginTop: 10,marginRight:30}}></View>
      </View>
    )
  }
}


const styles =StyleSheet.create({
  TextInput : {
    backgroundColor:"white", height:40,width:50, 
    borderRadius: 5,borderWidth:1,textAlign:"center"
  },
    Header :{height:100,backgroundColor: "#eeeeee",marginTop:30, 
  justifyContent: "center", alignItems: "center"}
  
})