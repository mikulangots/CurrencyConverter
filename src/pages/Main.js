import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';


export default class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#224F70" barStyle="light-content" />
        <Logo />
        <Form />
      </View>
   
    )
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4E86AE"
  },
});