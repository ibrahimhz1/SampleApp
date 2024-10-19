// app/AddToCartScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../app/(tabs)/NavigationTypes'; // Import your types

type AddToCartScreenProps = {
  route: RouteProp<RootStackParamList, 'AddToCart'>; // Specify the route type
};

const AddToCartScreen: React.FC<AddToCartScreenProps> = ({ route }) => {
  const { selectedProduct } = route.params; // Get selected product from route params

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Product: {selectedProduct.name}</Text>
      <Text style={styles.price}>Price: ${selectedProduct.price}</Text>
      <Image source={{ uri: selectedProduct.image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: '#111',
    marginTop: 5,
  },
});

export default AddToCartScreen;
