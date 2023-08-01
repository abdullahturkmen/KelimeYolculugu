import { StyleSheet, Image, View } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.push('Home')
    }, 2500);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../../assets/logo.png')} />
      </View>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8265DA'
  },
  logoContainer: {
    maxWidth: '100%',
    padding: '10%',
    height: undefined,
    aspectRatio: 1,
    flex: 1
  },
  logo: {
    maxWidth: '100%',
    padding: '10%',
    height: undefined,
    aspectRatio: 1,
    flex: 1,
    resizeMode: 'contain',
  }
})