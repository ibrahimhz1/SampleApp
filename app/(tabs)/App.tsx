// app/App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index'; // Adjust the path if necessary
import AddToCartScreen from '../../components/AddToCartScreen'; // Adjust the path if necessary
import { RootStackParamList } from './NavigationTypes'; // Import your navigation types

const Stack = createNativeStackNavigator<RootStackParamList>(); // Specify the param list here

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddToCart" component={AddToCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
