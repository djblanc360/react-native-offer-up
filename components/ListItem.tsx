// this will be the component that will be used to render each item in the list
// it will be used in the Home component
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import FavoriteButton from './buttons/FavoriteButton'

const ListItem = ({ title }: { title: string }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const setFavorite = () => {
        console.log('pressed', isFavorite)
        setIsFavorite(!isFavorite)
    }
    
  return (
    <View>
        <View className="flex justify-center"
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
        >
            <View
                className="flex-grow"
                style={{ flex: 1 }}
            >
                <Text>{title}</Text>
            </View>
            <FavoriteButton
                handlePress={setFavorite}
                isFavorite={isFavorite}
            />
        </View>
    </View>
  )
}

export default ListItem