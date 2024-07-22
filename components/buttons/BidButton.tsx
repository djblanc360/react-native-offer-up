import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const BidButton = () => {
  return (
    <TouchableOpacity className={`bg-green`}>
      <Text>Bid</Text>
    </TouchableOpacity>
  )
}

export default BidButton