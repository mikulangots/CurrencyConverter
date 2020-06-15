import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity,Picker,OptionBox, Alert } from 'react-native';

import API from '../service/API';
import axios from 'axios';

export default class Form extends Component {

    constructor(props){
    super(props);
    this.state = {
        currencies: [],
        country:["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "GBP", "HKD", "HRK", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "USD","ZAR"],
        country1:"",
        country2:"",
        baseCurrency: "",
    }
    }
    componentDidMount() {
        axios.get('https://api.exchangeratesapi.io/latest?').then(res => {
            const currencies = res.data;
            this.setState({ currencies: currencies});
            //console.log(currencies);
            //console.log(currency);
        }).catch(error => console.log(error));
    };
    showTest = async() => {
        var baseCurrency = this.state.country1;
        console.log(this.state.currencies.rates)
        if (baseCurrency ==""){
            alert("Please select a base currency");
        }else{
            alert(baseCurrency);
         }
        //this.state.currencies.map((count => console.log(count)))   
        return 1;
    };


    render() {
        
        return (
            <View style={styles.container}>
                <Picker style={styles.pickerContainer}
                    selectedValue={this.state.country1}
                    onValueChange={(itemValue, itemIndex) => this.setState({country1: itemValue})}>
                        {this.state.country.map((item, value) => {
                            return <Picker.Item label={item} value={item} key={value}/>
                        })}                    
                </Picker>
                <TextInput style={styles.inputBox} placeholder="Currency 1"
                    placeholderTextColor="rgba(255,255,255,0.5)"></TextInput>
                <Picker style={styles.pickerContainer}
                    selectedValue={this.state.country2}
                    onValueChange={(itemValue, itemIndex) => this.setState({country2: itemValue})}>
                        {this.state.country.map((item, value) => {
                            return <Picker.Item label={item} value={item} key={value}/>
                        })}                    
                </Picker>
                <TextInput style={styles.inputBox} placeholder="Currency 2"
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    secureTextEntry={true}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.showTest}>
                    <Text style={styles.buttonText}>CONVERT</Text>
                </TouchableOpacity>
              
            </View>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    pickerContainer:{
        backgroundColor: 'rgba(255,255,255,0.7)',
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