import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({navigation,route}) => {
  return (
    <View>
      <Text>Details</Text>
      <Text>{route.params.userID}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})