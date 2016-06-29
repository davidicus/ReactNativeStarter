'use strict';
import React, { Component } from 'react';
import { Navigator, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class ActionButton extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <View>
        <TouchableHighlight underlaycolor="#24CE84" onpress={this.props.onPress}>
          <text>{this.props.title}</text>
        </TouchableHighlight>
      </View>
    )
  }
}

module.exports = ActionButton
