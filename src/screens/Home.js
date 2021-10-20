import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colorTheme} from '../styles/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Ini adalah Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorTheme,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
