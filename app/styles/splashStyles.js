import React from 'react';
import { StyleSheet } from 'react-native';

const constants = {
  mainOrange: 'coral',
  actionColor: '#24CE84',
};

const SplashStyles = StyleSheet.create({
  splash: {
    alignItems: 'center',
    backgroundColor: constants.mainOrange,
    flex: 1,
    justifyContent: 'center',
    marginTop: -100,
  },

  splashTitle: {
    marginBottom: 10,
  },

  splashHeaderText: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },

  splashHeaderSubText: {
    borderColor: '#fff',
    borderWidth: 1,
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '200',
    marginLeft: 25,
    marginRight: 25,
    padding: 5,
    textAlign: 'center',
  },
});



module.exports = SplashStyles;
module.exports.constants = constants;
