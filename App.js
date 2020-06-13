import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import Main from './src/pages/Main';

export default function YourApp() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#224F70" barStyle="light-content" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#4E86AE"
  }

});