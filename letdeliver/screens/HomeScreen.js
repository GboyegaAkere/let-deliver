import { View, Text, SafeAreaView , Image, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'


const HomeScreen = () => {
  return (
    <SafeAreaView >
      <View className="bg-white">
       <View className="flex-row mx-3 mt-2 items-center space-x-2" >
        <Image source={require('../assets/delivery.png')} className="w-10 h-10 rounded-full"/>
            <View className="flex-1">
                <Text>Deliver Now</Text>
                <View className="flex-row items-center">
                    <Text className="font-bold text-lg">Current Location </Text>
                    <Ionicons name='chevron-forward-outline' size={25} color="blue" />
                </View>
            </View>
            <TouchableOpacity>
             <Ionicons name='person-add-outline' size={30} color="purple" />
            </TouchableOpacity>
        </View>
        
        <View className="flex-row items-center mx-3 mt-3 pb-3">
            <View className='flex-row space-x-1 items-center mt-2 bg-gray-200 flex-1 pt-2 pb-2 rounded'>
                <Ionicons name='search-outline' size={30}/>
                <TextInput placeholder='search for resturant' keyboardType='default'/>
            </View>
            <Ionicons name='options-outline' size={30}/>
        </View>
      </View>
        
        <ScrollView 
        contentContainerStyle={{
         paddingBottom:100
        
        }}

        >
        <Categories/>
        <FeaturedRow
            title="Featured"
            description="This is one of best recommended featured in here"
        />

        <FeaturedRow
            title="Offers Near You"
            description="This is one of best recommended featured in here"
        />


        <FeaturedRow
            title="Tasty Dicount"
            description="This is one of best recommended featured in here"
        />


        </ScrollView>
        
    </SafeAreaView>
  )
}

export default HomeScreen