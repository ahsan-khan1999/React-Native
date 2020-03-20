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
    const submitHandler = (todos) => {
        setTodos((todos) => {
            return [
                {text : todos},
                ...todos

            ]
        })
    }
    return(
        <View>
        <Text >Enter TODO</Text>
        <TextInput style={{borderColor:'black', borderWidth:10,marginHorizontal:10}} onChangeText={ChangeHandler}></TextInput>

        <Button title="Add"
        onPress={() => submitHandler(todos)}
        />

        <FlatList 
        keyExtractor={item => item.todos}
        data={todos}
        renderItem={({item}) => {return(<Text>{item.todos}</Text>)}}
        
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