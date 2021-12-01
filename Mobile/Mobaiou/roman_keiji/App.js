import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();


import Cadastro from './src/screens/Cadastro';
import Login from './src/screens/Login';
import Projetos from './src/screens/Projetos';
import Main from './src/screens/main';

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: true,
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Projetos" component={Projetos} />
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
        <AuthStack.Screen name="Main" component={Main} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}