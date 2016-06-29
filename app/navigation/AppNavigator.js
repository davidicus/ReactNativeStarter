'use strict';
import React, { Component } from 'react';
import { Navigator } from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import ScreenOne from '../screens/ScreenOne';


class AppNavigator extends Component {
  //List out your apps various screens and pass the props from navigator to each one
  // this will alow each screen to be able to use navigator without having to require it each time
  _renderScene (route, navigator) {
    const globalNavigatorProps = { navigator };

    switch (route.ident) {
      case 'SplashScreen':
        return ( <SplashScreen {...globalNavigatorProps} /> )

      case 'HomeScreen':
        return ( <HomeScreen {...globalNavigatorProps} /> )

      case 'ScreenOne':
        return ( <ScreenOne {...globalNavigatorProps} /> )

      default:
        return (<HomeScreen {...globalNavigatorProps} />)
    }
  }
  //this will render whatever page is passed as the initial route or just do the default route
  //configureScene allows us to control which ways our screens enter the scene
  render () {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref='appNavigator'
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.screenConfig || Navigator.SceneConfigs.FloatFromRight })}
      />
    )
  }
}

module.exports = AppNavigator;
