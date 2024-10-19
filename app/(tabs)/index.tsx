// app/index.tsx (HomeScreen)
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Button, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Product } from './NavigationTypes'; // Import Product and RootStackParamList if needed

const productsData: Product[] = [
  { id: '1', name: 'Air Jordan 1 Mid', image: 'https://dam.sothebys.com/dam/image/Item/3df40ba4-60e6-4721-b107-4b3d29ce916f/primary/medium', price: 149, originalPrice: 170, category: 'sneakers' },
  { id: '2', name: 'Tatum 1 "Home Team" PF', image: 'https://dam.sothebys.com/dam/image/Item/3df40ba4-60e6-4721-b107-4b3d29ce916f/primary/medium', price: 127, originalPrice: 140, category: 'running' },
  { id: '3', name: 'Sabrina 1 By You', image: 'https://dam.sothebys.com/dam/image/Item/3df40ba4-60e6-4721-b107-4b3d29ce916f/primary/medium', price: 170, originalPrice: 190, category: 'casual' },
  { id: '4', name: 'KD16 EP', image: 'https://dam.sothebys.com/dam/image/Item/3df40ba4-60e6-4721-b107-4b3d29ce916f/primary/medium', price: 179, originalPrice: 200, category: 'sneakers' },
];


const HomeScreen: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const navigation = useNavigation(); // Get navigation prop

  const addToCart = (product: Product) => {
    Alert.alert(`Added ${product.name} to your cart!`);
    navigation.navigate('AddToCart', { selectedProduct: product }); // Pass the product as parameter
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 40,
    paddingHorizontal: 15,
  },
  product: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontWeight: 'bold',
    color: '#111',
    marginTop: 5,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
