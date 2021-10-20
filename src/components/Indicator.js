import React from 'react';
import {
  ActivityIndicator, StyleSheet, View,
} from 'react-native';
import { colorFonts } from '../styles/Colors';

const Indicator = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colorFonts} />
  </View>
);

export default Indicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
