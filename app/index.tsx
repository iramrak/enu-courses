import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import Animated, { FadeIn , FadeInDown , FadeInRight , FadeInLeft, FadeInUp } from 'react-native-reanimated';

export default function index() {
  return (
    <View className=' flex-1'>
      <ImageBackground 
      source={require('../assets/images/bg.png')}
      resizeMode='cover'
      className='flex-1 absolute top-0 left-0 right-0 bottom-0'
      />
      <StatusBar style='light'/>
      <View className='mt-20'>
        <Animated.Text entering={FadeInRight.delay(200).springify()} className='text-2xl tracking-[1.3px] leading-7 w-[60%] mx-auto  text-white font-bold text-center'>
          Начни обучение прямо сейчас
        </Animated.Text>
        
        <Animated.Image 
          entering={FadeInUp.delay(350).springify()}
            source={require('../assets/images/bg-image.png')}
            className='absolute left-0 right-0 bottom-[300px]'
            />

        <Animated.View entering={FadeInDown.delay(200).springify()}  className='relative bottom-[110px] left-0 right-0 w-full h-full'>
          <View className='w-[100%] h-[300px] absolute bottom-0 rounded-[30px] bg-white'>
            <Text className='text-center text-xl tracking-[1.3px] leading-7 w-[87%] mt-[50px] mx-auto text-black font-semibold'>
                Учись с EnuCourses: выйбирай сложные темы, приходи тесты и проверяй свой знания!🔥
            </Text>
            <Link href='./home/' asChild> 
              <TouchableOpacity className='w-[90%] mx-auto my-7 h-[70px] rounded-2xl bg-primary'>
                <Text className='m-auto text-2xl font-bold text-white tracking-[0.6px]'>Перейти</Text>
              </TouchableOpacity> 
            </Link >
            </View>
        </Animated.View>
      </View>
    </View>
    )
}