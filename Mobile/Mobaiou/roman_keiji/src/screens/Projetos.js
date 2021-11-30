
import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import api from '../services/api';

import { TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Projetos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Lista: []
        }
    };

    BuscarProjetos = async () => {
        const resposta = await api.get('/Projetos');

        const dadosApi = resposta.data;
        this.setState({ Lista: dadosApi })
    }

    componentDidMount() {
        this.BuscarProjetos();
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.organizar_titulo}>
                    <Text style={styles.titulo}>
                        Projetos
                    </Text>
                    <View style={styles.linha}></View>
                </View>
                <FlatList
                    contentContainerStyle={styles.lista}
                    data={this.state.Lista}
                    keyExtractor={item => item.idProjeto}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }

    renderItem = ({ item }) => (
        <View style={styles.container_lista}>
            <View style={styles.container_nomes}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.nome_tema}>{item.idTemaNavigation.tituloTema}</Text>
            </View>
            <Text style={styles.descricao}>
                {item.decricao}
            </Text>
        </View>
    )

}


const styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#fff',
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
        height: '15%',
        width: '65%',

    }

});
