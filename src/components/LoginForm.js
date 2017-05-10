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