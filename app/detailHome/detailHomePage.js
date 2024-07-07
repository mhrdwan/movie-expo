import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useLocalSearchParams } from "expo-router";
import { fetchDetailMov, fetchVidList } from "../components/api";
import TrailerComp from "../components/Trailer/TrailerComp";

export default function DetailHome() {
  const { movieId } = useLocalSearchParams();
  const { width } = Dimensions.get("window");
  const [movieDetail, setMovieDetail] = useState("");
  const [videoDataStream, setvideoDataStream] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    const data = await fetchDetailMov(movieId);
    const datas = await fetchVidList(movieId);
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
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <YoutubePlayer
          height={240}
          play={true}
          videoId={videoDataStream?.[0]?.key}
        />
        <View style={{ padding: 10 }}>
          <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#0d8df6",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 25,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Tonton Sekarang
              </Text>
            </TouchableOpacity>
            <Text style={{ color: "white" }}>Download</Text>
            <Text style={{ color: "white" }}>Bookmark</Text>
          </View>
          
          <Text style={{ color: "white", marginBottom: 5, fontWeight: "600" }}>
            Terbit {movieDetail?.release_date}
          </Text>
          <Text style={{ color: "white", marginBottom: 5 }}>{movieDetail?.tagline}</Text>
          <Text style={{ color: "white", marginBottom: 10 }}>
            {movieDetail?.overview?.trim()}
          </Text>
          
          <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}>
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
          
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Trailers</Text>
          {videoDataStream?.map((item, index) => (
            <TrailerComp key={index} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}