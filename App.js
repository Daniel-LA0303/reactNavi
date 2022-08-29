// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
//COMPONENTES
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

//REACT NAVIGATION
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            title: 'Componente Principal',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name="Inicio" 
            component={Inicio} 
            
          />
          <Stack.Screen 
            name="Nosotros" 
            component={Nosotros} 
            options={ ({route}) => ({
              title: 'Nosotros'
            })
          }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;