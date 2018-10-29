import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store/store'
import { RootStack } from './navigation/Navigation'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}