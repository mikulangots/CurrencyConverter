import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 200, height: 173 }} source={require('../images/CurrencyConverterpng.png')}></Image>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    }
});