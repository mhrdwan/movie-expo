import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  RefreshControl
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import YoutubePlayer from "react-native-youtube-iframe";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchDetailMov, fetchVidList } from "../components/api";

export default function DetailHome() {
  const { movieId, movieTitle, poster_path } = useLocalSearchParams();
  const { width, height } = Dimensions.get("window");
  const [movieDetail, setMovieDetail] = useState("");
  const [videoDataStream, setvideoDataStream] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const data = await fetchDetailMov(movieId);
    const datas = await fetchVidList(movieId);
    console.log(` movieId`, movieId);
    console.log(datas?.results[0]);
    setvideoDataStream(datas?.results);
    setMovieDetail(data);
  };

  useEffect(() => {
    fetchData();
  }, [movieId]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  };

  return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl  refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View className="bg-primary" style={{ flex: 1 }}>
          <View className="">
            <YoutubePlayer
              height={240}
              play={true}
              videoId={videoDataStream?.[0]?.key} // Replace with your YouTube video ID
              initialPlayerParams={{
                controls: 0, // Hide player controls
                modestbranding: 1, // Reduce YouTube branding
                rel: 0, // Prevent showing related videos at the end
                showinfo: 0, // Hide video title and uploader info
                iv_load_policy: 3, // Hide video annotations
                autoplay: 0, // Automatically play video
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              marginTop: 5,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#0d8df6",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 25,
              }}
            >
              <Text className="text-white" style={{ fontWeight: "bold" }}>
                Tonton Sekarang
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "white", marginHorizontal: 10 }}>Download</Text>
            <Text style={{ color: "white", marginHorizontal: 10 }}>Bookmark</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text className="text-white mt-1 mb-1 font-semibold">
              Terbit {movieDetail?.release_date}
            </Text>
            <Text style={{ color: "white" }}>{movieDetail?.tagline}</Text>
            <Text style={{ color: "white", marginTop: 0 }}>
              {movieDetail?.overview?.trim()}
            </Text>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}
            >
              {movieDetail?.genres?.map((item, index) => (
                <View
                  key={index}
                  style={{
                    borderColor: "#0d8df6",
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    margin: 5,
                  }}
                >
                  <Text style={{ color: "#0d8df6" }}>{item?.name}</Text>
                </View>
              ))}
            </View>
            <View className="mt-4"></View>
          </View>
        </View>
      </ScrollView>
  );
}
