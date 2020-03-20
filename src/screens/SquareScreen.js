import React ,{ useState } from 'react'
import { View } from 'react-native'
import CountColor from '../ReusableComponents/CountColor'

const COLOR_INCREMENT = 20;

export default function SquareScreen() {
    const [red , setred] = useState(0);
    const [green , setgreen] = useState(0);
    const [blue , setblue] = useState(0);

    const setColor = (color,change) =>{
        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setred(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setgreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setblue(blue+change);
                return;
        }
        

    }

    return (
        <View>
            <CountColor onIncrease={() => setColor('red',COLOR_INCREMENT)} onDecrease={() => setColor('red',-1 * COLOR_INCREMENT)} color="red" />
            <CountColor onIncrease={() => setColor('green',COLOR_INCREMENT)} onDecrease={() => setColor('green',-1 * COLOR_INCREMENT)} color="green" />
            <CountColor onIncrease={() => setColor('blue',COLOR_INCREMENT)} onDecrease={() => setColor('blue',-1 * COLOR_INCREMENT)} color="blue" />

            <View style={{height:150 , width:100 ,backgroundColor:`rgb(${red},${green},${blue})`}}>


            </View>
        </View>
    )
}
