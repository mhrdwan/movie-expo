import { View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import AllCardMovie from "../components/AllCardMovie";
import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchNowTV,
} from "../components/api";
import { useLocalSearchParams } from "expo-router";

const { width: screenWidth } = Dimensions.get("window");
const cardWidth = (screenWidth - 30) / 2;

export default function SeeAll() {
  const [dataKamu, setDatakamu] = useState([]);
  const router = useLocalSearchParams();
  console.log(`router`, router.judul);

  useEffect(() => {
    if (router?.judul.toLowerCase() == "untuk kamu") {
      const getData = async () => {
        const data = await fetchTopRatedMovies();
        setDatakamu(data);
      };
      getData();
    } else if (router?.judul.toLowerCase() == "film popular") {
      const getData = async () => {
        const data = await fetchPopularMovies();
        setDatakamu(data);
      };
      getData();
    } else if (router?.judul.toLowerCase() == "tv") {
      const getData = async () => {
        const data = await fetchNowTV();
        setDatakamu(data);
      };
      getData();
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            padding: 8,
          }}
        >
          {dataKamu.map((movie, index) => (
            <AllCardMovie key={index} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
