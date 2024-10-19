import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

interface ProductProps {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    category: string;
  };
  onAddToCart: (productName: string) => void;
}

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => {
  const navigation = useNavigation();

  const handleAddToCart = () => {
    onAddToCart(product.name);
    navigation.navigate('AddToCart', { selectedProduct: product });
  };

  return (
    <View style={styles.product}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.originalPrice}>${product.originalPrice}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  name: {
    marginTop: 10,
    fontSize: 14,
  },
  price: {
    fontWeight: 'bold',
    color: '#111',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#999',
    fontSize: 12,
  },
});

export default Product;
