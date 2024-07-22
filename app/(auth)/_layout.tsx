import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Login from './login'
import Register from './register'

const AuthLayout = () => {
  return (
    <View>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
      <Login />
      <Register />

      <StatusBar backgroundColor="#4a148c" barStyle="light-content" />
    </View>
  )
}

export default AuthLayout 