import { View, Text, TextInput } from "react-native";
import React from "react";

export default function Pencarian({ placeholder, title, password }) {
  return (
    <View className="w-full mb-4">
      <Text className="text-white mb-2">{title}</Text>
      <View className="border-2 border-gray-300 rounded-lg overflow-hidden">
        <TextInput
          style={{
            width: "100%",
            padding: 16,
            color: "white",
            backgroundColor: "transparent",
          }}
          placeholder={placeholder}
          placeholderTextColor="#888"
          secureTextEntry={password}
        />
      </View>
    </View>
  );
}
