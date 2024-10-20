import { View, Text , Image , ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn , FadeInDown , FadeInRight , FadeInLeft, FadeInUp } from 'react-native-reanimated';
import Wellcom from '@/components/wellcom';
import OurCourses from '@/components/OurCourses';
import TestsBlock from '@/components/TestBlock';

export default function home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className='mt-16 mx-[10px] flex-1'>
      <StatusBar style='dark'/>

      {/*wellcom bar*/}
      <Wellcom />

      {/*our courses flat scroll view*/}
      <OurCourses />

      {/*test XDD i want sleep 3am i cant sleep sory i have 1 day left to make my project i want to talk to girl i like but she has BF , now am sad((*/}
      <TestsBlock />
    </ScrollView>
  )
}