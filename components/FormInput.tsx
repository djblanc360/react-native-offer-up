import { View, Image, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants'

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 10,
    }
})

interface FormInputProps {
    label: string
    placeholder: string
    onChangeText: (text: string) => void
    value: string
    secureTextEntry?: boolean
    keyboardType?: string
    otherStyles?: any // This is a hack to allow for other styles to be passed in
}

const FormInput = ({ label, placeholder, secureTextEntry = false, onChangeText, value, otherStyles } : FormInputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <View className={`my-4 space-x-2 ${otherStyles}`}>
            <View className="flex-row items-center w-full h-16 px-4 border-2 border-green focus:border-dark-green">
            <TextInput 
                className="flex-1"
                placeholder={placeholder} 
                placeholderTextColor={'#2D9C74'}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={label === 'Password' && !showPassword}
            />
            {label === 'Password' && (
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image source={!showPassword 
                        ? icons.eye
                        : icons.eyeHide}
                        className="w-6 h-6"
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            )}
            </View>
        </View>
    )
}

export default FormInput