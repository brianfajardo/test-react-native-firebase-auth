import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig'

import Header from './src/components/Header'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <View>
        <Header text="Login with Firebase 🔥" />
      </View>
    )
  }
}