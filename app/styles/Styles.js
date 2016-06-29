import React from 'react';
import { StyleSheet } from 'react-native';
const constants = {
  mainOrange: 'coral',
  actionColor: '#24CE84',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },

  /*
  ==========================
  //////////////////////////
    Login/SignUp Screen
  /////////////////////////
  ==========================
  */
  loginHeading: {
    fontSize: 20,
  },

  loginInput: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },

  loginButton: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },

  loginButtonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },

  transparentLoginButton: {
    height: 50,
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },

  transparentLoginButtonText: {
    fontSize: 22,
    color: '#555',
    alignSelf: 'center'
  },

  loginError: {
    color: 'red',
    paddingTop: 10
  },

  loginLoader: {
    marginTop: 20
  },

  /*
  ==========================
  //////////////////////////
    Home Screen
  /////////////////////////
  ==========================
  */
  home: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
    paddingTop: 40,
  },

  homeHeaderText: {
    color: 'coral',
  },

  /*
  ==========================
  //////////////////////////
    Navigator Styles
  /////////////////////////
  ==========================
  */
  navigatorStyles: {

  },



});



module.exports = styles;
module.exports.constants = constants;
