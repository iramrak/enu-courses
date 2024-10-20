import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import Animated, { FadeIn , FadeInDown , FadeInRight , FadeInLeft, FadeInUp } from 'react-native-reanimated';

export default function python() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='mt-10 pt-6 mx-[10px] flex-1'>
      <Animated.Image
      entering={FadeInUp.delay(200).springify()} 
      source={require('../assets/images/coursesPy.png')}
      className='w-[100%] h-[200px] rounded-3xl mx-auto'
      resizeMode='cover'
      />
      <View className='my-4'>
        <Animated.Text entering={FadeInRight.delay(230).springify()} className='font-semibold text-2xl w-[70%] leading-[23px] tracking-wider'>Курс по Python для начинающих</Animated.Text>
        <Animated.View entering={FadeInRight.delay(260).springify()} className='flex-row items-center my-4'>
          <View className='w-[60px] h-[60px] bg-primary rounded-full'></View>
            <View className='text-left mx-3'>
              <Text className='font-bold text-lg'>Темирлан Жапарбеков</Text>
              <Text className='leading-4 text-[#7B7B7B]'>Cтудент ЕНУ</Text>
          </View>
        </Animated.View>

        <View className='flex-row items-center gap-1'>

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
      </View>


      {/*Text area*/}
      <View>
        <Animated.Text entering={FadeIn.delay(500).springify()} className='font-bold text-2xl pt-[45px]'>Что такое Python?</Animated.Text>
        <Animated.Text entering={FadeIn.delay(540).springify()} className='text-lg mt-2'><Text className='font-bold'>Python</Text> — это популярный язык программирования, который часто используется для разработки веб-приложений, анализа данных и автоматизации задач.</Animated.Text>
        
        <Animated.Text entering={FadeIn.delay(580).springify()} className='font-bold text-2xl mt-4'>1.Переменные и типы данных</Animated.Text>
        <Animated.Text entering={FadeIn.delay(630).springify()} className='text-lg mt-2'>В Python для хранения данных используются переменные. Переменные могут хранить разные типы данных:</Animated.Text>
        <Animated.Text entering={FadeIn.delay(690).springify()} className='text-lg mt-1 ml-5'>int — целые числа (например, 10, -3)</Animated.Text>
        <Text className='text-lg mt-1 ml-5'>float — числа с плавающей точкой (например, 3.14)</Text>
        <Text className='text-lg mt-1 ml-5'>str — строки, заключенные в кавычки (например, "Hello, world!")</Text>
        <Text className='text-lg mt-1 ml-5'>bool — логические значения (True или False)</Text>
        <Text className='font-bold text-2xl mt-4'>Пример кода:</Text>
        <Image 
        source={require('../assets/images/pyexample6.png')}
        className='w-full h-[98px] rounded-xl mt-2 mx-auto'
        resizeMode='stretch'
        />

      <Text className='font-bold text-2xl mt-4'>2. Ввод и Вывод</Text>
      <Text className='text-lg mt-1 ml-5'>print() — вывод данных на экран.</Text>
      <Text className='text-lg mt-1 ml-5'>input() — ввод данных от пользователя.</Text>

      <Text className='font-bold text-2xl mt-4'>3. Условные Операторы</Text>
      <Text className='text-lg mt-2'>Условные операторы используются для принятия решений. В Python используются if, elif и else.</Text>
      <Image 
        source={require('../assets/images/pyexample5.png')}
        className='w-full h-[130px] rounded-xl mt-2 mx-auto'
        resizeMode='stretch'
        />

      <Text className='font-bold text-2xl mt-4'>4. Циклы</Text>
      <Text className='text-lg mt-2'>Циклы позволяют повторять блок кода. В Python есть два типа циклов:</Text>
      <Text className='text-lg mt-1 ml-5'>for используется для перебора элементов:</Text>
      <Image 
        source={require('../assets/images/forexemple.png')}
        className='w-full h-[78px] rounded-xl mt-2 mx-auto'
        resizeMode='stretch'
        />
        <Text className='text-lg mt-3 ml-5'>while повторяет блок кода, пока условие истинно:</Text>
        <Image 
        source={require('../assets/images/pyexample4.png')}
        className='w-full h-[112px] rounded-xl mt-2 mx-auto'
        resizeMode='stretch'
        />

      <Text className='font-bold text-2xl mt-4'>5. Функции</Text>
      <Text className='text-lg mt-2'>Функции — это блоки кода, которые можно вызывать по имени. Определяются с помощью ключевого слова def:</Text>
      <Image 
        source={require('../assets/images/defexemple.png')}
        className='w-full h-[130px] rounded-xl mt-2 mx-auto'
        resizeMode='stretch'
        />

      <Text className='font-bold text-2xl mt-4'>6. Списки</Text>
      <Text className='text-lg mt-2'>Список — это структура данных, которая может хранить несколько элементов:</Text>
      <Image 
        source={require('../assets/images/pyexample3.png')}
        className='w-full h-[94px] rounded-xl mt-2 mx-auto'
        resizeMode='stretch'
        />

        <Link href={'./test/'} asChild>
          <TouchableOpacity className='w-full h-[65px] bg-primary rounded-2xl mt-8 mb-3'>
            <Text className='m-auto text-2xl tracking-wider text-white font-bold'>Перейти к тесту</Text>
          </TouchableOpacity>
        </Link>

        <Link href={'./(app)'} asChild>
          <Text className='mx-auto mb-16'>Назад в главное меню</Text>
        </Link>
      </View>
    </ScrollView>
  )
}