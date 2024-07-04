// CardImageFilm.js
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import React from "react";

export default function CardImageFilm({ title, posterPath, onPress }) {
  const { width, height } = Dimensions.get("screen");
  return (
    <Pressable onPress={onPress}>
      <View className="h-[200px] rounded-lg w-[150px] bg-white">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }}
          style={{ width: "100%", height: "100%", borderRadius: 7 }}
        />
        {/* <Text className="text-black">{title}</Text> */}
      </View>
    </Pressable>
  );
}