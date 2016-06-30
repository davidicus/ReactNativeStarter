'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ViewContainer from '../components/ViewContainer';
// import styles, {constants} from '../styles/homeStyles.js';


class ScreenOne extends Component {
  render () {
    return (
      <ViewContainer style={styles.screenOne}>
        <StatusBar
           backgroundColor="white"
           barStyle="default"
         />
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigator.pop()}>
          <Icon style={styles.screenOnebackIcon} name="ios-arrow-back" size={30} color={'#555'} />
          <Text style={styles.screenOnebackText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenOneHeaderText}>Screen One</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  screenOne: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
  },

  screenOneHeaderText: {
    color: '#555555',
    fontWeight: '900',
    fontSize: 30,
  },

  backButton: {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'center',
    left: 10,
    position: 'absolute',
    top: 30,
  },

  screenOnebackText: {
    alignItems: 'center',
    color: '#555555',
    marginTop: -2,
  },

  screenOnebackIcon: {
    alignItems: 'center',
    marginRight: 5,
  },

});

module.exports = ScreenOne
