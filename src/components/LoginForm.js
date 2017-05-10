import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'
import firebase from 'firebase'

import Input from './Input'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    // Controlled inputs
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    const { email, password } = this.state

    // Clear error on next login attempt
    this.setState({ error: '' })

    // auth() returns a Promise
    // If initial sign in fails, attempt to create account
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        console.log('first catch', email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(() => {
            console.log('second catch', email, password)
            this.setState({ error: 'Uh oh! Authentication failed.' })
          })
      })
  }

  renderError() {
    const { error } = this.state

    return (
      error
        ? <Text style={style.errorStyle}>{error}</Text>
        : null
    )
  }

  render() {
    const { buttonStyle, buttonContainer, errorContainer } = style

    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View>
          <Icon
            name='account-circle'
            color='orange'
            size={150}
          />
        </View>

        <View style={errorContainer}>
          {this.renderError()}
        </View>

        <View>
          <Input
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            label='Password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <View style={buttonContainer}>
          <Button
            icon={{
              name: 'flame',
              type: 'octicon',
              color: 'orange'
            }}
            title='Submit'
            style={buttonStyle}
            backgroundColor='grey'
            borderRadius={20}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    )
  }
}

const style = {
  buttonStyle: {
    width: 150
  },
  buttonContainer: {
    alignItems: 'center'
  },
  errorStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },
  errorContainer: {
    alignItems: 'center'
  }
}