'use strict';
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Navigator } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewContainer from '../components/ViewContainer';
import styles, {constants} from '../styles/homeStyles.js';

const homePageIcon = (<Icon name="ios-home-outline" size={30} color={constants.mainOrange} />)

class HomeScreen extends Component {
  constructor (props) {
    super();
    this.state = {
    };
  }

  render () {
    return (
      <ViewContainer style={styles.home}>
        <Text style={styles.homeHeaderText}>Home Page</Text>
        <TouchableOpacity style={styles.homeTitle} onPress={(event) => this._navigateToScreenOne()}>
          <Text style={styles.homeHeaderSubText}> { homePageIcon } Project Starter</Text>
        </TouchableOpacity>

      </ViewContainer>
    )
  }

  _navigateToScreenOne () {
    this.props.navigator.push({
      ident: 'ScreenOne',
    })
  }
}

module.exports = HomeScreen;
