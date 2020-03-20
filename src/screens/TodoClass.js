import React, { Component } from 'react'
import {TextInput,Button,Text,View,StyleSheet} from 'react-native'
export default class TodoClass extends Component {
//     constructor(props){
//         super();
//         this.state={
//             element:''
//         }
//     }
// myfunc=()=>{
// const {element} = this.state;
// }
    render() {
        return (
            <View>
                <Text>Hello </Text>
                {/* <Text style={{alignSelf:'center'}}>Enter element </Text>
                <TextInput style={{borderColor:'black', borderWidth:10,marginHorizontal:10}} 
                value={element}
                // onChangeText={newelement => this.setState({element})}
                />    

                {/* <Button title="Add Element "
                onPress={() => {return(<Text>{this.state.element}</Text>)}}
                /> */} */}

                
            </View>
        )
    }
}
const style = StyleSheet.create({});
