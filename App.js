import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig'

import Header from './src/components/Header'
import LoginForm from './src/components/LoginForm'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="Login with Firebase" />
        <LoginForm />
      </View>
    )
  }
}