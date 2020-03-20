import React, { Component } from 'react'
import { View, Text , Button} from 'native-base'
import {SafeAreaView} from 'react-native-safe-area-context';

// import React from 'react'

const ComponentScreen = props => {
    // console.log(props);
    
    return(
        // <SafeAreaView>
        <View>
            <Text>Hi thhere Yellow!!</Text>
            

        </View>    
        // </SafeAreaView>
    );
};



// class ComponentScreen extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> Component Screen</Text>
//                 </View>
//         )
//     }
// }
export default ComponentScreen;