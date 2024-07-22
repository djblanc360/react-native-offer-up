import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

interface FavoriteButtonProps {
  handlePress: () => void
  isFavorite: boolean
}

const FavoriteButton = ({ handlePress, isFavorite }: FavoriteButtonProps) => {
  return (
    <FontAwesome.Button 
    name="heart"
    backgroundColor="transparent"
    onPress={handlePress}
    color={isFavorite ? 'red' : 'black'}
  >
  </FontAwesome.Button>
  )
}

export default FavoriteButton