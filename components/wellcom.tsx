import { View, Text , Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Animated, { FadeIn , FadeInDown , FadeInRight , FadeInLeft, FadeInUp } from 'react-native-reanimated';

const Wellcom = () => {
  return (
    <View className='flex-row items-center'>
      <Animated.View entering={FadeInRight.delay(200).springify()} className='w-[47px] bg-primary rounded-full h-[47px] '>
        <Image 
        source={require('../assets/images/bg.png')}
        resizeMode='cover'
        className='w-[30px] h-[30px] m-auto rounded-full'
        />
      </Animated.View>
      <Animated.Text entering={FadeInRight.delay(230).springify()} className='font-semibold text-lg mx-2 tracking-[0.6px]'>Привет, студент!</Animated.Text>
  </View>
  )
}

export default Wellcom