import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './routers/Router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle='default'
          backgroundColor='#337c3b'
        />
        <Router />
      </NavigationContainer>
      <FlashMessage position='top' />
    </>
  );
};

export default App;