import { View, Text, Image } from "react-native";
import React from "react";

export default function CardTV({ title, posterPath ,first_air_date}) {
  return (
    <View>
      <View className="h-[150px] rounded-lg w-[250px] bg-white">
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }}
          style={{ width: "100%", height: "100%", borderRadius: 7 }}
          resizeMode="cover"
        />
      </View>
      <Text className="text-white mt-2 font-semibold">{title}</Text>
      <Text className="text-white  ">{first_air_date}</Text>
    </View>
  );
}
