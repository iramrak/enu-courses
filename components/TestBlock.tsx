import { View, Text ,ScrollView, Image, TouchableOpacity} from 'react-native'
import Animated, { FadeIn , FadeInDown , FadeInRight , FadeInLeft, FadeInUp } from 'react-native-reanimated';
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

const TestsBlock = () => {
  return (
    <View className='mb-4'>
      <Animated.Text entering={FadeInRight.delay(200).springify()} className='text-2xl text-black font-semibold tracking-wider'>Наши тесты</Animated.Text>


    <Link href={'../../test/'} asChild>
      <TouchableOpacity className='my-4'>
        <Animated.Image
        entering={FadeInDown.delay(250).springify()} 
        source={require('../assets/images/testbg1.png')}
        resizeMode='stretch'
        className='w-full h-[200px]'
        />
        <View className='flex-row pt-3 items-center gap-1'>

          <Animated.View entering={FadeInDown.delay(300).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <FontAwesome name="star" size={24} color="#3D3F3B" />
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>0/10</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(350).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>5 минут</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>Python</Text>
          </Animated.View> 

        </View>
      </TouchableOpacity>
    </Link>

      <View className='my-4'>
        <Animated.Image 
        entering={FadeInDown.delay(250).springify()} 
        source={require('../assets/images/testbg2.png')}
        resizeMode='stretch'
        className='w-full h-[200px]'
        />
        <View className='flex-row pt-3 items-center gap-1'>

          <Animated.View entering={FadeInDown.delay(300).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <FontAwesome name="star" size={24} color="#3D3F3B" />
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>0/10</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(350).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>15 минут</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).springify()} className='w-[120px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>HTML И CSS</Text>
          </Animated.View> 

        </View>
      </View>

      <View className='my-4'>
        <Animated.Image 
        entering={FadeInDown.delay(250).springify()} 
        source={require('../assets/images/testDev.png')}
        resizeMode='stretch'
        className='w-full h-[200px]'
        />
        <View className='flex-row pt-3 items-center gap-1'>

          <Animated.View entering={FadeInDown.delay(300).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <FontAwesome name="star" size={24} color="#3D3F3B" />
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>0/?</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(350).springify()} className='w-[90px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'>0 минут</Text>
          </Animated.View>

          <Animated.View entering={FadeInDown.delay(400).springify()} className='w-[120px] h-[35px] border-[3px] border-[#3D3F3B] rounded-full flex-row items-center justify-center'>
            <Text className='text-center text-[#3D3F3B] font-bold text-lg tracking-[-0.6px]'> ??? </Text>
          </Animated.View> 

        </View>
      </View>
    </View>
  )
}

export default TestsBlock