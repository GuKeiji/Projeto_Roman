import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resolvePlugin } from '@babel/core';


export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            descricao: '',
            listaTema: [],
            idTema: 0,
            itemValue: 0,
        }
    };

    // BuscarTema = async () => {
    //     const resposta = await api.get('/Tema');

    //     const dadosApi = resposta.data;
    //     this.setState({ listaTema: dadosApi })
    // }

    Cadastrar = async () => {
        const resposta = await api.post('/Projetos', {
            idTema: this.state.itemValue,
            nome: this.state.nome,
            decricao: this.state.descricao,
        })
            console.warn('cadastrei')
    }

    // componentDidMount() {
    //     this.BuscarTema();
    // }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.organizar_titulo}>
                    <Text style={styles.titulo}>
                        Criar Projeto
                    </Text>
                    <View style={styles.linha}></View>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Título"
                        placeholderTextColor="#000"
                        keyboardType="default"
                        onChangeText={nome => this.setState({ nome })}>
                    </TextInput>

                    <TextInput style={styles.input}
                        placeholder="Descrição"
                        placeholderTextColor="#000"
                        keyboardType="default"
                        // secureTextEntry={true}
                        onChangeText={descricao => this.setState({ descricao })}>
                    </TextInput>

                    <Picker
                        selectedValue={this.state.itemValue}
                        onValueChange={itemValue => this.setState({ itemValue })}
                        mode="dropdown" // Android only
                        style={styles.picker}
                    >
                        <Picker.Item label="Escolha um Tema" value={null} />
                        <Picker.Item label="Matemática" value={1} />
                        <Picker.Item label="Português" value={2} />
                        <Picker.Item label="Biologia" value={3} />
                        <Picker.Item label="História" value={4} />
                        <Picker.Item label="Geografia" value={5} />
                    </Picker>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.Cadastrar} >
                        <Text style={styles.buttonText}>Criar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    input: {
        color: '#000',
        borderBottomColor: '#00ff00',
        borderBottomWidth: 2,
        width: 250,
    },

    button: {
        width: 90,
        height: 30,
        borderWidth: 1,
        borderColor: '#00ff00',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#00ff00'
    },

    form: {
        alignItems: 'center',
    },

    organizar_titulo: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
        width: '100%'
    },

    titulo: {
        textTransform: 'uppercase',
        color: '#00ff00',
        fontSize: 40,
    },

    linha: {
        width: '70%',
        backgroundColor: '#00ff00',
        height: 2,
    },

    lista: {
        flex: 3,
        width: '65%',
        justifyContent: 'center',
        paddingTop: 45,
        // paddingBottom: 100,
        // backgroundColor: 'purple',
    },

    container_lista: {
        height: '49.5%',
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingLeft: 5,
    },

    container_nomes: {
        alignContent: 'space-between',
        // backgroundColor: '#ff00ff',
        // width: '100%',s
        height: '40%',
    },

    nome: {
        // backgroundColor: 'yellow',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00ff00',
        // width: '25%',

    },

    nome_tema: {
        // backgroundColor: 'blue',
        // width: '30%',
        fontWeight: 'bold',
    },

    descricao: {
        width: '60%',
        // backgroundColor: 'yellow',
    },

    picker: {
        borderBottomColor: '#00ff00',
        borderBottomWidth: 2,
        width: 250,
    }

});