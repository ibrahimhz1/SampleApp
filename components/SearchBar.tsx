import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search product"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 14,
  },
});

export default SearchBar;