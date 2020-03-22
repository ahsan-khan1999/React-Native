import React ,{useState } from 'react'
import { View , Text , Button , StyleSheet ,TextInput} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler'

export default Todo = () => {
    


    const [element,setelement] = useState('');
    const [todos,setTodos] = useState([
        {text: ''}
    ]);

    const ChangeHandler = (val) =>{
        setelement(val);
    }
    const submitHandler = (text) => {
        setTodos((text) => {
            return [
                {text : text},
                ...todos

            ]
        })
    }
    return(
        <View>
        <Text >Enter TODO</Text>
        <TextInput style={{borderColor:'black', borderWidth:10,marginHorizontal:10}} onChangeText={ChangeHandler}></TextInput>

        {/* <Button title="Add"
        onPress={() => submitHandler(todos)}
        /> */}

        <FlatList 
        keyExtractor={item => item.todos}
        data={todos}
        renderItem={({item}) => (<View><Text>{item.todos}</Text><Button title="X" onPress={() => this.submitHandler(todos)} /></View>)}
        
        />

        </View>
    )


    // return (
        // <View>
        //     {/* <Text style={{alignSelf:'center'}}>Enter element </Text>
        //     <TextInput style={{borderColor:'black', borderWidth:10,marginHorizontal:10}} 
            
        //     onChangeText={ChangeHandler}
        //     // value={newelement}
        //     />
        //     <Button  title="Add Elements" 
        //     onPress={() => {setelement([...element,element])}}
        //     /> */}
        //     // {/* <Button  title="Remove Element" /> */}


        //     // {/* <FlatList 
        //     // data={element}
        //     // renderItem={({item}) => {return(<Text>{element}</Text>)}}
        //     //  */}
        //     // {/* /> */}
             
        // </View>
    // )
}
    
// const returnElement =() =>{
    

//             return newelement;
// }

const style = StyleSheet.create({});