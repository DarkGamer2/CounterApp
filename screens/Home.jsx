import { View, Text,Pressable } from 'react-native';


function Home({navigation}) {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.welcome}>Welcome!</Text>
      <Pressable style={homeStyles.createButton}>
        <Text onPress={() => navigation.navigate('Form')} style={homeStyles.buttonText}>Create Account</Text>
      </Pressable>
      <Pressable style={homeStyles.counterButton}>
        <Text onPress={() => navigation.navigate('Counter')} style={homeStyles.buttonText}>Use Counter</Text>
      </Pressable>
    </View>
  );
}


const homeStyles={
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    welcome:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    createButton:{
        backgroundColor: '#ff00f7',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        margin: 10
    }
    ,
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    counterButton:{
        backgroundColor: '#8800ff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        margin: 10
    }
}
export default Home;