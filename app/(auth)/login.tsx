import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState }  from 'react'
import FormInput from '@/components/FormInput'
import { Link } from 'expo-router'

import { login } from '../../services/auth'
import { images } from '../../constants'


const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    console.log('Login')
    
    try {
      const data = {
        email: form.email,
        password: form.password
      }
      const res = await login(data)
      if (res) {
        console.log('login successful')
        // Handle successful login
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
            Welcome back
          </Text>

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
              <Text className="text-lg font-semibold text-center text-white">Login</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-sm text-right text-indigo">Forgot password?</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center gap-2 pt-5">
            <Text className="text-sm dark-gray">Don't have an account?</Text>
            <Link href="/register" className="font-psemibold">
              <Text className="text-sm text-indigo">Register</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login 