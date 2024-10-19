import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface CategoriesProps {
  onFilter: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onFilter }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <View style={styles.categories}>
      {['all', 'running', 'sneakers', 'casual'].map(category => (
        <Button
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          onPress={() => handleFilter(category)}
          color={activeCategory === category ? '#111' : '#ccc'}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Categories;