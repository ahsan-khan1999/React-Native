import React from 'react'
import { View , Button} from 'react-native'
import { Text } from 'native-base'
// import { Button } from 'native-base'

export default function CountColor(props) {
    return (
        <View>
            <Text>{props.color}</Text>
            <Button title={`Increase ${props.color}`} onPress={() => {props.onIncrease()}}  />
            <Button title={`Decrease ${props.color}`} onPress={() => {props.onDecrease()}} />
        </View>
    )
}
