import React from 'react'
import { Text ,StyleSheet, View , Image } from "react-native";

const ImageDetails = (props) =>{
    return(
        <View>
        <Image source={props.imageShow} />
        <Text>{props.title}</Text> 
        <Text>Image Score  - {props.score}</Text>

            </View>
    );
}

export default ImageDetails;