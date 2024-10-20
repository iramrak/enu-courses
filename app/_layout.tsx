import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen
        name="index"
        options={{ headerShown: false }} />

        <Stack.Screen 
        name='(app)'
        options={{ headerShown: false }}
        />

        <Stack.Screen 
        name='python'
        options={{ headerShown: false }}
        />

        <Stack.Screen 
        name='html'
        options={{ headerShown: false }}
        />
        
        <Stack.Screen
        name="test"
        options={{ headerShown: false }} />

    </Stack>
  )
}