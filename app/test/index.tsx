import { View, Text, FlatList ,Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import { QUESTIONS } from '@/constants/data';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';

export default function index() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showScore, setShowScore] = useState(false);

  console.log({ isCorrect });
  
  const handleNext = () => {
    if (currentQuestionIndex === QUESTIONS.length - 1) {
      setShowScore(true); // Показываем результат после последнего вопроса
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleOptionPress = (pressedOption: any) => {
    setSelectedOption(pressedOption);

    // Сравниваем индекс выбранной опции с правильным индексом
    const isAnswerCorrect = QUESTIONS[currentQuestionIndex].correctAnswerIndex === pressedOption.id;

    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  if (showScore) {
    return (

    <>
      <View className='mt-16 mx-[10px] w-[350px] h-[350px] bg-primary m-auto rounded-xl'>
        <Text className='text-2xl text-white font-bold text-center mt-[30%]'>
          Ваш результат:
        </Text>
        <Text className='text-2xl text-white font-bold text-center mt-3'>{score} из {QUESTIONS.length}</Text>
       
      </View>
     <Pressable className='p-4 w-[90%] h-[65px] mx-auto my-20 bg-primary rounded-lg' onPress={() => {
          // Перезапускаем тест
          setShowScore(false);
          setCurrentQuestionIndex(0);
          setScore(0);
        }}>
          <Text className='text-center text-white font-bold text-2xl'>Дальше</Text>
        </Pressable>
    </>
   
      
    );
  }

  return (
    <View className='mt-[65px] mx-[10px]'>
      <View>
        <Link href={'../(app)'} asChild className='mb-5'>
          <Ionicons name="chevron-back-sharp" size={24} color="black"/>
        </Link>
        <View className='w-[100%] h-[350px] bg-primary rounded-xl flex items-center justify-center'>
          <Text className='text-white font-semibold text-2xl mb-4 w-[80%] text-center'>
            {QUESTIONS[currentQuestionIndex].question}
          </Text>
          {QUESTIONS[currentQuestionIndex].image && (
            <Image
              source={QUESTIONS[currentQuestionIndex].image}
              className='w-[90%] rounded-2xl mt-4'
              resizeMode='cover'
            />
          )}
        </View>

        {QUESTIONS[currentQuestionIndex].options.map((option) => (
          <Pressable
            key={option.id}
            style={[
              tw`p-5 bg-primary mt-2 rounded-lg`,
              selectedOption === option ? (isCorrect ? tw`bg-green-500` : tw`bg-red-500`) : tw`bg-blue-500`,
            ]}
            onPress={() => handleOptionPress(option)}
            disabled={!!selectedOption} // Если выбрана опция, блокируем возможность нажимать снова
          >
            <Text className='text-white'>{option.answer}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable className='p-4 mt-5 border-primary border-[1px] rounded-lg' onPress={handleNext}>
        <Text>Next</Text>
      </Pressable>
    </View>
  );
}