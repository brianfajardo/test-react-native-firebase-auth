import React from 'react'
import { View, Text } from 'react-native'

export default (props) => {
  const { text } = props
  const { viewStytle, textStyle } = styles

  return (
    <View style={viewStytle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

const styles = {
  viewStytle: {
    backgroundColor: 'rgb(21,148,136)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 16,
    color: 'white'
  }
}