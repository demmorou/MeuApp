import React, {Component} from 'react';
import { View, SafeAreaView, Text, StyleSheet } from 'react-native';

export default class Home extends Component {

    render(){
        return (
            <SafeAreaView style={styles.container}>

                <Text style={styles.text}>Olá, seja bem-vindo!</Text>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: '#212121',
        fontSize: 16
    }
}); 