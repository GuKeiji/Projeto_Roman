import React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'adm@adm.com',
      senha: 'jere123',
    };
  }

  realizarLogin = async () => {
    const resposta = await api.post('/Login', {
      email: this.state.email,
      senha: this.state.senha,
    });
    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken' , token);

    if(resposta.status == 200){
      this.props.navigation.navigate('Projetos');
    }
    console.warn(token);
  }


  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.logo}>R</Text>
        <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          keyboardType="email-address"
          onChangeText={email => this.setState({email})}
        ></TextInput>
        <TextInput style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ffffff"
          keyboardType="default"
          secureTextEntry={true}
          onChangeText={senha => this.setState({senha})}></TextInput>
          
        <TouchableOpacity
          style={styles.button}  
          onPress={this.realizarLogin} >
          
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
}


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

