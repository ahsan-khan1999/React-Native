import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
// import {SafeAreaView} from 'react-native-safe-area-context';
// import HomeScreen from './src/screens/HomeScreen'
// import ListScreen from './src/screens/ListScreen'
// import ComponentScreen from './src/screens/ComponentScreen'

const HomeScreen = ({navigation}) => {
    // console.log(props);  
    
    return(
        // <SafeAreaView>
        <View>
            <Text>Hi thhere!!</Text>
            <Button
            title="Go to ListScreen"
            onPress={() => navigation.navigate('list')}
            />
            <Button 
            title="Go To Components Demo"
            onPress={() => navigation.navigate('Components')}
            
            />
            <Button 
            title="Go To Image Demo"
            onPress={() => navigation.navigate('image')}

            
            />
            <Button 
            title="Go To Counter Demo"
            onPress={() => navigation.navigate('counter')}
            
            
            />
            <Button 
            title="Go To Color Demo"
            onPress={() => navigation.navigate('color')}
            
            />
            <Button 
            title="Go To Square Demo"
            onPress={() => navigation.navigate('square')}
            
            />
            <Button 
            title="Go To Text Demo"
            onPress={() => navigation.navigate('text')}
            
            />
            <Button 
            title="Go To Todo Demo"
            onPress={() => navigation.navigate('todo')}
            
            />
            <Button 
            title="Go To TodoClass Demo"
            onPress={() => navigation.navigate('todoc')}
            
            />
           </View>    
        // </SafeAreaView>
    );
};




// class HomeScreen extends Component {
//     render() {
//         return (
//             <View>
//                 <Text>Home Screen</Text>
//                 </View>
//         )
//     }
// }
export default HomeScreen;