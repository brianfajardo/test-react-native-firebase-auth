import React, { Component } from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, Button, Icon } from 'react-native-elements'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)

    // Controlled input
    this.state = { text: '' }
  }

  render() {
    const { buttonStyle, iconStyle } = style

    return (
      <View>
        <Icon
          name='flame'
          type='octicon'
          color='rgb(240,139,85)'
          size={100}
          iconStyle={iconStyle}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={text => console.log(text)}
          secureTextEntry={true}
        />
        <Button
          icon={{ name: 'link', type: 'octicon' }}
          title='Submit'
          style={buttonStyle}
          backgroundColor='rgb(202,202,202)'
          borderRadius={20}
        />
      </View>
    )
  }
}

const style = {
  buttonStyle: {
    marginTop: 15
  },
  iconStyle: {
    marginTop: 30
  }
}