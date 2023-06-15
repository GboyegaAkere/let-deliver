import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const ResturantCard = ({id,image,title,rating,genre,address,short_description, dishes,long,lat}) => {
  return (
    <View className="bg-white rounded mr-3">
      <Image source={{uri:image}} className="h-40 w-40"/>
      <Text className="font-bold text-lg">{title}</Text>
      <View className="flex-row items-center space-x-2">
        <Ionicons name='star-outline' size={25}/>
        <Text>{genre}</Text>
      </View>

      <View className="flex-row items-center">
        <Ionicons name='location-outline' size={25}/>
        <Text>{address}</Text>
      </View>

    </View>
  )
}

export default ResturantCard