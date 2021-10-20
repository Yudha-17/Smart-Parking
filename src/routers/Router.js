import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from'../screens/Home';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={Registration}
        options={{title: 'Registrasi Akun'}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
