/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colorFonts, colorTheme} from '../styles/Colors';
import {APP_VERSION} from '../config';
import Gap from '../components/Gap';
import Indicator from '../components/Indicator';

const Splash = ({navigation}) => {
  setTimeout(async () => {
    navigation.replace('LoginScreen');
  }, 2700);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Gap height={200} />
        <Text style={styles.text}>Sedang Memuat...</Text>
        <Gap height={55} />
        <Indicator />
      </View>
      <Gap height={100} />
      <View style={styles.version}>
        <Text style={styles.appVersion}>Versi Aplikasi</Text>
        <Text style={styles.appVersion}>{APP_VERSION}</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  appVersion: {
    fontSize: 18,
    color: colorFonts,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: colorTheme,
  },
  logo: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: colorFonts,
  },
  version: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
