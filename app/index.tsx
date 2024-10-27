import React, { useState } from 'react';
import { Button, Text, View, Pressable } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("black");

  // FUNCTION THAT INCREASES COUNT
  const increase = () => {
    setCount(count + 1);
  }

  // FUNCTION THAT DECREASES COUNT
  const decrease = () => {
    setCount(count - 1);
  }

  // FUNCTION THAT RESETS COUNT
  const reset = () => {
    setCount(0);
  }

  // CHANGE BACKGROUND TO BLUE
  const changeBackground = () => {
    setBackgroundColor("sky");
  }

  // CHANGE BACKGROUND TO BLACK
  const changeBackgroundToBlack = () => {
    setBackgroundColor("black");
  }

  return (
    <View className={`flex items-center justify-center gap-10 ${backgroundColor === 'black' ? 'bg-black' : 'bg-sky-500'}  min-h-screen`}>
      <View className='flex flex-row items-center justify-center gap-4'>
        <Pressable
          className="w-24 h-12 rounded-full bg-white mt-4 items-center justify-center"
          onPress={() => changeBackground()}
        >
          <Text className="text-black font-medium">Син Фон</Text>
        </Pressable>
        <Pressable
          className="w-24 h-12 rounded-full bg-white mt-4 items-center justify-center"
          onPress={() => changeBackgroundToBlack()}
        >
          <Text className="text-black font-medium">Черен Фон</Text>
        </Pressable>
      </View>
      <Text className="font-semibold text-2xl text-white">Мобилен Брояч</Text>
      <Text className='text-white font-normal text-lg'>Брояч: {count}</Text>
      <View className='flex flex-row items-center gap-3 mt-4'>
        {/* Increase Button */}
        <Pressable
          className="w-24 h-12 rounded-full bg-white mt-4 items-center justify-center"
          onPress={() => increase()}
        >
          <Text className="text-black font-medium">Увеличи</Text>
        </Pressable>
        {/* Decrease Button */}
        <Pressable
          className="w-24 h-12 rounded-full bg-white mt-4 items-center justify-center"
          onPress={() => decrease()}
        >
          <Text className="text-black font-medium">Намали</Text>
        </Pressable>
        {/* Reset Button */}
        <Pressable
          className="w-24 h-12 rounded-full bg-white mt-4 items-center justify-center"
          onPress={() => reset()}
        >
          <Text className="text-black font-medium">Нулирай</Text>
        </Pressable>
      </View>
    </View>
  );
}
