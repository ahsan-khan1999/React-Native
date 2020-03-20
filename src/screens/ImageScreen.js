import React from 'react'
import { Text , View ,StyleSheet } from 'react-native'
import ImageDetails from '../ReusableComponents/ImageDetails'
const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="beach" imageShow = {require('../../original/beach.jpg')} score={9} />
            <ImageDetails title="forest" imageShow = {require('../../original/forest.jpg')} score={8}/>
            <ImageDetails title="mountains" imageShow = {require('../../original/mountain.jpg')} score={5}/>
            </View>
    )
}
const style = StyleSheet.create({

});
export default ImageScreen