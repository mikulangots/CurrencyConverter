import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';

export default class Form extends Component {


    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox} placeholder="Currency 1"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    onChangeText={(email) => this.setState({ email })}></TextInput>

                <TextInput style={styles.inputBox} placeholder="Currency 2"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}></TextInput>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CONVERT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CURRENCY LIST</Text>
                </TouchableOpacity>
            </View>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 15
    },
    button: {
        width: 300,
        backgroundColor: '#224F70',
        borderRadius: 25,
        marginVertical: 15,
        paddingVertical: 14

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});