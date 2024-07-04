// app/page/home/index.js
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import CardImageFilm from "../components/cardImageFilm";
import CardHome from "../components/cardHome";
import CardTV from "../components/CardTV/CardTV";
import {
  fetchNowTV,
  fetchPopularMovies,
  fetchTopRatedMovies,
} from "../components/api";
import { useRouter } from "expo-router";

export default function Home() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [onTV, setOnTV] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchTopRatedMovies();
      const moviesPopular = await fetchPopularMovies();
      const tv = await fetchNowTV();
      setTopRatedMovies(movies);
      setPopularMovies(moviesPopular);
      setOnTV(tv);
      setLoading(false);
    };

    getMovies();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }} horizontal={false}>
      <CardHome />
      <View className="bg-primary pl-4 pr-4">
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text className="text-white font-bold text-[20px]">Untuk Kamu</Text>
          <Text className="text-mainBlue">See All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-5 flex flex-row space-x-3"
        >
          {(topRatedMovies.length > 0 ? topRatedMovies : Array(3).fill({})).map(
            (movie, index) => (
              <View key={movie.id || index}>
                <CardImageFilm
                  key={movie.id || index}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  onPress={() =>
                    router.push({
                      pathname: "detailHome/detailHomePage",
                      params: {
                        movieId: movie.id,
                        movieTitle: movie.title,
                        poster_path: movie.poster_path,
                      },
                    })
                  }
                />
              </View>
            )
          )}
        </ScrollView>
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text className="text-white font-bold text-[20px]">TV</Text>
          <Text className="text-mainBlue">See All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-5 flex flex-row space-x-3"
        >
          {(onTV.length > 0 ? onTV : Array(3).fill({})).map((movie, index) => (
            <View key={movie.id || index}>
              <CardTV
                title={movie.name}
                first_air_date={movie.first_air_date}
                posterPath={movie.poster_path}
              />
            </View>
          ))}
        </ScrollView>
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text className="text-white font-bold text-[20px]">Film Popular</Text>
          <Text className="text-mainBlue">See All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-5 flex flex-row space-x-3 mb-20"
        >
          {(popularMovies.length > 0 ? popularMovies : Array(3).fill({})).map(
            (movie, index) => (
              <View key={movie.id || index}>
                <CardImageFilm
                  title={movie.title}
                  posterPath={movie.poster_path}
                  onPress={() =>
                    router.push({
                      pathname: "detailHome/detailHomePage",
                      params: {
                        movieId: movie.id,
                        movieTitle: movie.title,
                        poster_path: movie.poster_path,
                      },
                    })
                  }
                />
              </View>
            )
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}
