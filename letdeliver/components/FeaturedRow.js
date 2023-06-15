import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const FeaturedRow = ({title, description}) => {
  return (
   <View>
    <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name='arrow-forward-outline' size={25} color="red"/>
    </View>

    <Text>{description}</Text>
   </View>
  )
}

export default FeaturedRow