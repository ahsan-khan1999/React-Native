import React ,{ useState } from 'react'
import {Text , View , Button ,StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
const ColorScreen = () => {
    const [colors ,setcolors] = useState([]);
    return (
        <View >
            <Button title="Add Color" onPress={() => {setcolors([...colors,randomRGB()]);}}/>
            
            <FlatList style={{flexDirection:'row'}}
            keyExtractor={item => item}
            data={colors}
            renderItem= {({item})=> {return(<View style={{height: 100 , width: 100 , backgroundColor:item } }/>)}}

            />
            

        </View>
    )
}
const randomRGB = () =>{
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red} ,${green},${blue})`;
}
const style= StyleSheet.create({});
export default ColorScreen;
