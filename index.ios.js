//import react and any components you will be using in the file
import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
//must require styles relative to current file
import styles from './app/styles/Styles.js';
import AppNavigator from './app/navigation/AppNavigator';

class ReactStarter extends Component {
  render() {
    return (
      <AppNavigator initialRoute={{ident: 'SplashScreen'}} />
    );
  }
}

AppRegistry.registerComponent('ReactStarter', () => ReactStarter);
