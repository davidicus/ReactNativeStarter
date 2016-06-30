'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ViewContainer from '../components/ViewContainer';
import styles from '../styles/splashStyles.js';

const splashPageIcon = (<Icon name="terrain" size={80} color="#fff" />)

class SplashScreen extends Component {
  constructor (props) {
    super();
    this.state = {
      visible: false
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount () {
    setTimeout (() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 1500);
    setTimeout (() => {
      this._navigateToHome();
    }, 3000);
  }

  render () {
    if (!this.state.visible) {
      return this._renderLoadingView();
    }
    return this._renderHome();
  }

  _renderLoadingView () {
    return (
      <ViewContainer style={styles.splash}>
      <StatusBar
         backgroundColor="blue"
         barStyle="light-content"
       />
        <Spinner visible={!this.state.visible} />
      </ViewContainer>
    );
  }

  _renderHome () {
    return (
      <ViewContainer style={styles.splash}>
        <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
        <TouchableOpacity style={styles.splashTitle} onPress={(event) => this._navigateToHome()}>
          <Text style={styles.splashHeaderText}>React-Native</Text>
          <Text style={styles.splashHeaderSubText}>Project Starter</Text>
        </TouchableOpacity>
        { splashPageIcon }
      </ViewContainer>
    )
  }

  _navigateToHome () {
    this.props.navigator.push({
      ident: 'HomeScreen',
    })
  }
}

module.exports = SplashScreen
