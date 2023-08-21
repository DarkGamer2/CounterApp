import {View,Text, Pressable} from "react-native";
import {useState} from "react";
import {useFonts} from "expo-font"
import { useCallback } from "react"
const Counter=()=>{
    const [count,setCount]=useState(0);

    const [fontsLoaded,fontError]=useFonts({
        'BebasNeue':require("../assets/fonts/BebasNeue-Regular.ttf")
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
          await SplashScreen.hideAsync();
        }
      }, [fontsLoaded, fontError]);
    
      if (!fontsLoaded && !fontError) {
        return null;
      }

return (
    <View style={counterStyles.container} onLayout={onLayoutRootView}>
        <Text style={counterStyles.title}>Counter</Text>
        <Text style={counterStyles.countText}>{count}</Text>
        <Pressable style={counterStyles.increaseButton} onPress={()=>setCount(count + 1)}>
            <Text style={counterStyles.buttonText}>Increase Count</Text>
        </Pressable>
        <Pressable style={counterStyles.decreaseButton}  onPress={()=>setCount(count - 1)}>
            <Text style={counterStyles.buttonText}>Decrease Count</Text>
        </Pressable>
        <Pressable style={counterStyles.resetButton}  onPress={()=>setCount(0)}>
            <Text style={counterStyles.buttonText}>Reset Count</Text>
        </Pressable>
    </View>
)
}

const counterStyles={
    increaseButton:{
        backgroundColor:'#006aff',
        padding:10,
        margin:10,
        borderRadius:5,
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    decreaseButton:{
        backgroundColor:'#ff8400',
        padding:10,
        margin:10,
        borderRadius:5,
    },
    countText:{
        fontSize:30
    },
    title:{
        fontSize:30,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily:"BebasNeue"
    },
    resetButton:{
        backgroundColor:'#ff0000',
        padding:10,
        margin:10,
        borderRadius:5,
    }
}
export default Counter;