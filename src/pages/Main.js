import React, { Component } from 'react';
import { View, SafeAreaView, Text, StyleSheet, TextInput, StatusBar, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

// import { Container } from './styles';

const colorOrange = '#e65c00';
const backgroundColor = '#ffffff';

export default class Main extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={backgroundColor} barStyle='dark-content' />

        <View style={{ position: "absolute", top: 1 }}>
          <Image
            style={{width: 150, height: 150, resizeMode: "contain" }}
            source={require('../assets/images/rn.png')}/>
        </View>

          <TextInput style={styles.textInput} maxLength={6} underlineColorAndroid='#333333' placeholder='Usuário' />
          <TextInput style={styles.textInput} maxLength={6} secureTextEntry underlineColorAndroid='#333333' placeholder='Senha' />

          <TouchableOpacity activeOpacity={.5} style={styles.button}>
            <Text style={styles.textButton}>ENTRAR</Text>
          </TouchableOpacity>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: backgroundColor,
        width: '100%',
        padding: 10
    },
    textInput: {
        backgroundColor: '#f2f2f2',
        width: '100%',
        color: '#212121',
        fontSize: 16,
        height: 49,
        marginBottom: 15,
        borderRadius: 5.5,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: 49,
      backgroundColor: colorOrange,
      position: "absolute",
      bottom: 0
    },
    textButton: {
      fontSize: 18,
      fontWeight: "bold",
      color: '#ffffff'
    }
}); 