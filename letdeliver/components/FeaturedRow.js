import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ResturantCard from './ResturantCard'
import Ionicons from '@expo/vector-icons/Ionicons'

const FeaturedRow = ({title, description}) => {
  return (
   <View>
    <View className="flex-row items-center justify-between mt-4 px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Ionicons name='arrow-forward-outline' size={25} color="red"/>
    </View>

    <Text className="text-gray-400 px-4">{description}</Text>


    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    className='pt-4'
    contentContainerStyle={{
        paddingHorizontal:14
    }}
    >
    <ResturantCard
     id={1}
     image="https://links.papareact.com/gn7"
     title="chapters"
     rating={4}
     genre="yoruba"
     address="futa south gate"
     short_description="this is it"
     dishes={[]}
     long={20}
     lat={23}
    />


  <ResturantCard
     id={1}
     image="https://links.papareact.com/gn7"
     title="chapters"
     rating={4}
     genre="yoruba"
     address="futa south gate"
     short_description="this is it"
     dishes={[]}
     long={20}
     lat={23}
    />

   <ResturantCard
     id={2}
     image="https://links.papareact.com/gn7"
     title="chapters"
     rating={4}
     genre="yoruba"
     address="futa south gate"
     short_description="this is it"
     dishes={[]}
     long={20}
     lat={23}
    />

   <ResturantCard
     id={3}
     image="https://links.papareact.com/gn7"
     title="chapters"
     rating={4}
     genre="yoruba"
     address="futa south gate"
     short_description="this is it"
     dishes={[]}
     long={20}
     lat={23}
    />
    </ScrollView>
   </View>
  )
}

export default FeaturedRow