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
        currency:[],
        country1:"",
        currency1:1.0,
        result1:1.0,
        country2:"",
        currency2:1.0,
        result2:1.0,
    }
    }
    componentDidMount() {
        axios.get('https://api.exchangeratesapi.io/latest?base=' + this.state.country1).then(res => {
            const currencies = res.data;
            this.setState({ currencies: res.data});
            //console.log(currencies);
            this.setAllCurrencies();                        
        }).catch(error => console.log(error));
    };
    setAllCurrencies = async() => {
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.AUD])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.BGN])}); 
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.BRL])}); 
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.CAD])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.CHF])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.CNY])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.CZK])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.DKK])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.GBP])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.HKD])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.HUF])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.IDR])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.HRK])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.ILS])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.INR])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.ISK])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.JPY])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.KRW])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.MXN])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.MYR])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.NOK])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.NZD])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.PHP])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.PLN])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.RON])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.RUB])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.SEK])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.SGD])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.THB])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.TRY])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.USD])});
        this.setState({currency : this.state.currency.concat([this.state.currencies.rates.ZAR])});
        this.setState({result1: this.state.currency[0]});
        this.setState({result2: this.state.currency[0]});
        this.setState({currency1: this.state.currency[0]});
        this.setState({currency2: this.state.currency[0]});
    };

    setCurrency1(value,index){
        this.setState({country1: value});
        this.setState({currency1: this.state.currency[index.toString()]});
        this.setState({result1: this.state.currency[index.toString()]});
        
    };
    setCurrency2(value,index){
        this.setState({country2: value});
        this.setState({currency2: this.state.currency[index.toString()]});
        this.setState({result2: this.state.currency[index.toString()]});
    };
    calculateConversion =async() => {
        rate=1/(this.state.currency1/this.state.currency2);
        console.log(rate);
        console.log(this.state.result1);
        total= this.state.result1*rate;
        this.setState({result2: total});
        console.log(this.state.result2);

    };

    render() {
        
        return (
            <View style={styles.container}>
                <Picker width={100} height={100}
                    selectedValue={this.state.country1}
                    onValueChange={(itemValue, itemIndex) =>  this.setCurrency1(itemValue,itemIndex)}>
                        {this.state.country.map((item, value) => {
                            return <Picker.Item label={item} value={item} key={value}/>
                        })}                    
                </Picker>
                <TextInput style={styles.inputBox1} placeholder={this.state.result1.toString()}
                    onChangeText={text => this.setState({result1: text})} value={this.state.result1}
                    placeholderTextColor="rgba(255,255,255,0.5)"></TextInput>
                <Picker width={100} height={100}
                    selectedValue={this.state.country2}
                    onValueChange={(itemValue, itemIndex) => this.setCurrency2(itemValue,itemIndex)}>
                        {this.state.country.map((item, value) => {
                            return <Picker.Item label={item} value={item} key={value}/>
                        })}                    
                </Picker>
                <TextInput style={styles.inputBox2} placeholder={this.state.result2.toString()}
                    onChangeText={text => this.setState({result2: text})} value={this.state.result2}
                    placeholderTextColor="rgba(255,255,255,1)" editable={false}></TextInput>
                <TouchableOpacity style={styles.button} onPress={this.calculateConversion}>
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
        justifyContent: 'center'
    },
    inputBox1: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 15
    },
    inputBox2: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 15,
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