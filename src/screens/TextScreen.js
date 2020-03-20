import React ,{useState } from 'react'
import { View , Text , StyleSheet , TextInput} from 'react-native'
// import { Text } from 'native-base'

export default  TextScreen = () => {
    const [name , setname] = useState('');
    return (
        <View>
            <Text>Enter Password!</Text>
            <TextInput style={style.input} 
            value={name}
            onChangeText={newName => setname(newName)}
            
            />
            {name.length < 5 ? <Text>Password must be > 6 Char</Text> : <Text>My Name is {name}</Text> }
            
        </View>
    )
}
const style = StyleSheet.create({
    input : {
        margin:10,
        borderColor: 'black',
        borderWidth:1,
        flex:1,
    }
})