import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Form from './screens/Form';
import Home from './screens/Home';
import Details from './screens/Details';
import Counter from './screens/Counter';
function App() {
  
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Counter" component={Counter}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;