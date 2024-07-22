import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'
import FormInput from '@/components/FormInput'
import { Link } from 'expo-router'

import { register } from '../../services/auth'
import { images } from '../../constants'


const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (name: string, value: string) => {
    console.log(`name: ${name}, value: ${value}`)
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleForgotPassword = () => {
    console.log('Forgot password')
  }

  const submit = async () => {
    setIsLoading(true)
    console.log('register')
    
    try {
      const data = {
        username: form.username,
        email: form.email,
        password: form.password
      }
      const res = await register(data)
      if (res) {
        console.log('register successful')
        // Handle successful register
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
    
  }

  
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        <View className="justify-center w-full px-4 my-6 min-h-[85vh]">
          <Image source={images.logo} resixzeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="mt-4 text-2xl font-bold text-center text-dark">
            Join Offer Up
          </Text>
          
          <FormInput
            label="Username"
            placeholder="Enter your username"
            onChangeText={(value) => handleInputChange('username', value)}
            value={form.username}
          />

          <FormInput 
            label="Email" 
            placeholder="Enter your email"
            onChangeText={(value) => handleInputChange('email', value)}
            value={form.email}
            keyboardType="email-address"
          />
          
          <FormInput 
            label="Password" 
            placeholder="Enter your password"
            onChangeText={(value) => handleInputChange('password', value)}
            value={form.password}
            secureTextEntry
            keyboardType="password"
          />
          
          <TouchableOpacity onPress={submit} disabled={isLoading}>
            <View className="px-4 py-2 rounded-md bg-green focus:bg-dark-green">
              <Text className="text-lg font-semibold text-center text-white">Register</Text>
            </View>
          </TouchableOpacity>

          <View className="flex-row justify-center gap-2 pt-5">
            <Text className="text-sm dark-gray">Have an account already?</Text>
            <Link href="/login" className="font-psemibold">
              <Text className="text-sm text-indigo">Login</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register 