import { View, Text , Image, ScrollView} from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'



const Categories = () => {
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator="false"
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10
        
    }}
    >
      <CategoryCard
      img="https://links.papareact.com/gn7"
      title="pzzi"
      />
       <CategoryCard
      img="https://links.papareact.com/gn7"
      title="pzzi"
      />

      <CategoryCard
      img="https://links.papareact.com/gn7"
      title="pzzi"
      />
       <CategoryCard
      img="https://links.papareact.com/gn7"
      title="pzzi"
      />

      <CategoryCard
      img="https://links.papareact.com/gn7"
      title="pzzi"
      />
    </ScrollView>
  )
}

export default Categories