import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View className="bg-yellow-400">
        <Text className="text-xl">this is my first react native app</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen