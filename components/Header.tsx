import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://websim.creation.engine/Nike_logo.svg' }}
      />
      <View style={styles.icons}>
        <MaterialIcons name="favorite-border" size={24} color="black" />
        <FontAwesome name="shopping-cart" size={24} color="black" />
        <Feather name="more-horizontal" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 40,
    height: 40,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 72,
  },
});

export default Header;