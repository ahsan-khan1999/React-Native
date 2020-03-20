import React , { useState } from 'react'
import { View , Text ,Button ,StyleSheet} from 'react-native'

export default CounterScreen = () => {
    const [counter, setcounter] = useState(0);
    return (
        <View>
            <Button title = "Increase" 
            onPress={() => {
                setcounter(counter + 1);
            }}
            />
            <Button title="Decrease" 
            onPress={() => {
                if(counter <= 0){
                    return;    
                }
                else{
                    setcounter(counter - 1);
                }
                
            }}
            />
            <Text>Counter {counter}</Text>
        </View>
    )
}

const style = StyleSheet.create({});
