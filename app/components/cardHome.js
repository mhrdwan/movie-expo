import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function CardHome() {
  const { width, height } = Dimensions.get("window");

  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://www.vitalthrills.com/wp-content/uploads/2023/01/antmanposter-1-729x1080.jpg.webp",
        }}
        style={{ height: height * 0.5 }}
        className="bg-primary w-screen space-x-3"
      >
        <LinearGradient
          colors={["transparent", "#090e17"]}
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: height * 0.15, // Atur tinggi sesuai kebutuhan
            justifyContent: "flex-end",
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <Text className="font-semibold text-[20px] text-white mb-3">
            Ant Man
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#0d8df6",
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 25,
              alignSelf: "flex-start", // Mengatur tombol di kiri bawah
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Tonton Sekarang
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
