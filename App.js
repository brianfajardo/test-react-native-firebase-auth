import React, { Component } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import firebase from 'firebase'
import firebaseConfig from './src/firebaseConfig'

import Header from './src/components/Header'
import LoginForm from './src/components/LoginForm'
import Spinner from './src/components/Spinner'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { isloggedIn: null }
  }

  componentWillMount() {
    firebase.initializeApp(firebaseConfig)

    // App component can determine if user is logged in
    // or out by watching the onAuthStateChanged callback

    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({ isloggedIn: true })
        : this.setState({ isloggedIn: false })
    })
  }

  renderContent() {
    const { centerStyle } = styles
    switch (this.state.isloggedIn) {
      case true:
        return <Button title="Log out" style={centerStyle} />
      case false:
        return <LoginForm />
      default:
        return <Spinner style={centerStyle} />
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text="Testing Firebase auth with React Native" />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  centerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}