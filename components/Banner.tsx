import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner: React.FC = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>JUST DO IT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Banner;