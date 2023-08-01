import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';

const Home = ({navigation,route}) => {
  return (<>
    <View>
      <Text>Home</Text>
      <Button color="error" onPress={() => navigation.navigate('Details', {userID: 'Jane'})}>Dıkla Bana</Button>
    </View>
    <View>

    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})