import React from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

export default ({ label, onChangeText, value, secureTextEntry }) =>
  <View>
    <FormLabel>{label}</FormLabel>
    <FormInput
      onChangeText={onChangeText}
      value={value}
      autoCorrect={false}
      secureTextEntry={secureTextEntry}
      autoCapitalize={'none'}
    />
  </View>