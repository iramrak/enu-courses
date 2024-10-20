import { View, Text, FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Animated, { FadeIn , FadeInDown , FadeInRight , FadeInLeft, FadeInUp } from 'react-native-reanimated';
import { SLIDER } from '../constants'


const OurCourses = () => {
  return (
    <View className='my-[20px]'>
        <Animated.Text entering={FadeInRight.delay(270).springify()} className='font-semibold text-2xl tracking-wide'>Наши курсы</Animated.Text>
        <View className='mt-4'>
            <Animated.FlatList
            entering={FadeInLeft.delay(300).springify()} 
            data={SLIDER}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <Link href={`./${item.href}`} asChild>
                    <TouchableOpacity className='mr-[10px]'>
                        <Image
                        source={item.image}
                        className='w-[277px] h-[150px] rounded-2xl' />
                    </TouchableOpacity>
                </Link>
            )}
            />
        </View>
    </View>
  )
}

export default OurCourses