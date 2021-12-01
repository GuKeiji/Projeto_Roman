import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Cadastro from './Cadastro';
import Projetos from './Projetos';

export default class Main extends Component {
  
  render() {
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='Cadastro'

            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'Projetos') {
                  return(
                    <Text 
                      style={styles.tabBarIcon}
                    > Projetos </Text>
                  )
                }
                if (route.name === 'Cadastro') {
                  return(
                    <Text 
                      style={styles.tabBarIcon}
                    > Cadastrar </Text>
                  )
                }
              },

              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: '#00ff00',
              tabBarInactiveBackgroundColor: '#00ff00',
              tabBarStyle: { height: 50 }
            }) }
          >

            <bottomTab.Screen name="Projetos" component={Projetos} />
            <bottomTab.Screen name="Cadastro" component={Cadastro} />

          </bottomTab.Navigator>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
   tabBarIcon: {
    width: 22,
    height: 22
  }
});