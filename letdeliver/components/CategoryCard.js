import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({title, img}) => {
  return (
    <TouchableOpacity>
      <View className="relative"> 
      <Image source={{uri:img}} className="h-20 w-20 mr-5 rounded-full"/>
      <Text className="absolute bottom-3 ml-3 text-white">{title}</Text>
      </View> 
      
    </TouchableOpacity>
  )
}

export default CategoryCard