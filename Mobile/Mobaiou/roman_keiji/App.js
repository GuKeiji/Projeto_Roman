import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.main}>
        <Text style={styles.logo}>R</Text>
      <TextInput style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
      ></TextInput>
      <TextInput style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#ffffff"
        keyboardType="default"
        secureTextEntry={true}></TextInput>
      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: 'rgba(60, 245, 79, 1)',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },

  logo: {
    height: '30%',
    fontSize: 183.2,
    color: '#ffffff',
  },

  input: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    width: '50%'
  },

  button: {
    width: '30%',
    height: '6%',
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff'
  }
});

export default App;
