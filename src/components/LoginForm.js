import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'

import Input from './Input'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    // Controlled input
    this.state = { email: '', password: '' }
  }

  render() {
    const { buttonStyle, buttonContainer } = style

    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View style={buttonContainer}>
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
  }
}