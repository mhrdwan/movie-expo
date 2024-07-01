import { View, Text ,Dimensions} from "react-native";
import React from "react";

export default function CardImageFilm() {
  const { width, height } = Dimensions.get("screen");
  return (
    <View className='h-[200px] rounded-lg w-[150px] bg-white'>
      <Text className="text-white">CardImageFilm</Text>
    </View>
  );
}
