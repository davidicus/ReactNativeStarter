import React from 'react';
import { StyleSheet } from 'react-native';

const constants = {
  mainOrange: 'coral',
  actionColor: '#24CE84',
};

const HomeStyles = StyleSheet.create({
  home: {
    alignItems: 'center',
    backgroundColor: constants.mainOrange,
    flex: 1,
    justifyContent: 'center',
    marginTop: -100,
    paddingLeft: 40,
    paddingRight: 40,
  },

  homeTitle: {
    marginBottom: 10,
  },

  homeHeaderText: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
  },

  homeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 100,
    textAlign: 'left',
  },

  homeHeaderSubText: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    color: constants.mainOrange,
    fontSize: 26,
    fontWeight: '200',
    overflow: 'hidden',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center',
  },
});



module.exports = HomeStyles;
module.exports.constants = constants;
