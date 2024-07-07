import { View, Dimensions, Text, StyleSheet, Image } from "react-native";
import React from "react";

const { width: screenWidth } = Dimensions.get("window");
const cardWidth = (screenWidth - 30) / 2;

export default function AllCardMovie({ movie }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
          }}
          style={{ width: "100%", height: "100%", borderRadius: 7 }}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    marginBottom: 15,
  },
  card: {
    backgroundColor: "black",
    height: Dimensions.get("window").height * 0.3,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "red",
  },
});
