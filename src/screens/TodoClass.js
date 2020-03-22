import React, { Component } from 'react'
import {TextInput,Button,Text,View,StyleSheet, ListView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
export default class TodoClass extends Component {
    constructor(props){
        super();
        this.state={
            element:'',
            list : []
        }
    }
    changeUserInput = (input) =>{
        this.setState({
            element:input
        });

    }

    addtodolist = (input)=>{
        let arraylist = this.state.list;
        arraylist.push(input);
        this.setState({
            list:arraylist,
            element:''
        })
    }
    removetodo = (input) => {
        let arraylist = this.state.list;
        arraylist.pop(input);
        this.setState({
            list:arraylist,
            element:''
        })
    }
// myfunc=()=>{
// const {element} = this.state;
// }
    render() {
        return (
            <View>
                <TextInput 
                onChangeText={(e) => this.changeUserInput(e)}
                value={this.state.element}
                
                />
                <Button 
                title="Add Todo"
                onPress={() => this.addtodolist(this.state.element)}
                />
                <Button 
                title="Remove Todo"
                onPress={() => this.removetodo(this.state.element)}
                />

                <FlatList 
                data={this.state.list}
                renderItem={({ item }) => <View><Text>{item}</Text></View>}
                />               
            </View>
        )
    }
}
const style = StyleSheet.create({});
