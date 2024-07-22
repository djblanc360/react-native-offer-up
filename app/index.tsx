import { Image, Text, View, SafeAreaView, ScrollView, Button, StatusBar } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { icons } from '../constants'
import { images } from '../constants'

const App = () => {
  return (
    <SafeAreaView className="flex-1 bg-green">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="items-center justify-center flex-1">
          <Link href="/home">
            <Image source={images.logo} className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40" />
          </Link>
          <Text className="mt-4 text-2xl font-bold text-center text-white">
            Welcome to Offer Up
          </Text>
          <Text className="mt-2 text-lg text-center text-white">
            Buy & Sell Locally
          </Text>
          <Link href="/home" className="mt-4">
            <View className="px-4 py-2 rounded-md bg-dark-green">
              <Text className="text-lg font-semibold text-center text-white">Browse Offers</Text>
            </View>
          </Link>
          <Link href="/login" className="mt-4">
            <View className="px-4 py-2 rounded-md bg-indigo">
              <Text className="text-lg font-semibold text-center text-white">Login</Text>
            </View>
          </Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#4a148c" barStyle="light-content" />
    </SafeAreaView>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })