import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Login from './src/components/Login';
import '@expo/match-media'
import { useMediaQuery } from "react-responsive";

const App = () => {
  const mediaQueries = {
    isPhone: useMediaQuery({
        query: '(min-device-width: 320px)'
    }),
    isSmallTablet: useMediaQuery({
        query: '(min-device-width: 480px)'
    }),
    isTablet: useMediaQuery({
        query: '(min-device-width: 600px)'
    }),
    isLaptop: useMediaQuery({
        query: '(min-device-width: 801px)'
    }),
    isDesktop: useMediaQuery({
        query: '(min-device-width: 1025px)'
    }),
    isLargeDesktop: useMediaQuery({
        query: '(min-device-width: 1281px)'
    })
  }

  return (
    <View style={styles.container}>
      <Login mediaQueries={mediaQueries}></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App
