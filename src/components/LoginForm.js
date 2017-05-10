import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'
import firebase from 'firebase'

import Input from './Input'
import Spinner from './Spinner'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    // Controlled inputs
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      error: ''
    }

    this.onButtonPress = this.onButtonPress.bind(this)
    this.onLoginSuccess = this.onLoginSuccess.bind(this)
    this.onLoginFail = this.onLoginFail.bind(this)
  }

  onButtonPress() {
    const { email, password } = this.state

    this.setState({ isLoading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      isLoading: false,
      error: ''
    })
  }

  onLoginFail() {
    this.setState({
      isLoading: false,
      error: 'Uh oh! Authentication failed.'
    })
  }

  renderButton() {
    return (
      this.state.isLoading
        ? <Spinner />
        : <Button
          icon={{
            name: 'flame',
            type: 'octicon',
            color: 'orange'
          }}
          title='Submit'
          style={style.buttonStyle}
          backgroundColor='grey'
          borderRadius={20}
          onPress={this.onButtonPress}
        />
    )
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
    const { buttonContainer, errorContainer } = style

    return (
      <View style={{ justifyContent: 'space-around' }}>
        <View>
          <Icon
            name='account-circle'
            color='orange'
            size={150}
          />
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
        <View style={errorContainer}>
          {this.renderError()}
        </View>
        <View style={buttonContainer}>
          {this.renderButton()}
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
    alignItems: 'center',
    marginTop: 30
  },
  errorStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red'
  },
  errorContainer: {
    alignItems: 'center',
    marginTop: 10
  }
}