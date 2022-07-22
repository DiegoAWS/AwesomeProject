import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ImageBackground
      source={require('../assets/images/background.jpeg')}
      style={styles.container}
    >
      <View
        style={styles.loginContainer}
      >

        <TextInput
          style={styles.textInput}
          placeholder='login'
          value={login}
          onChangeText={setLogin}
        />


        <TextInput
          style={styles.textInput}
          placeholder='password'
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <View style={
          styles.buttonsContainer
        }>
          <Button
            title='Login'
            color='purple'
            onPress={() => {
              console.log('Login: ', login)
              console.log('Password: ', password)
            }}
          />

          <Button
            title='Register'
            color='purple'
            onPress={() => {
              console.log('Login: ', login)
              console.log('Password: ', password)
            }}
          />
        </View>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logoCompany.png')}
          style={styles.logoCompany}
        />
        <Text 
        style={styles.logoText}>
          2022
        </Text>
      </View>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loginContainer: {
    width: '80%',
    backgroundColor: '#fffa',
    borderRadius: 10,
    padding: 20,
  },
  textInput: {
    width: '100%',
    padding: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#fffe',
    color: 'purple',
    borderWidth: 1,
    borderColor: 'purple',
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: 10,
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'purple',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  logoCompany: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  logoText: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 10,
  }
})