import { View, Text, Dimensions } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function TrailerComp({item}) {
  const { width } = Dimensions.get("window");
  
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <View style={{ width: width * 0.5, aspectRatio: 16/9, marginRight: 10 }}>
        <YoutubePlayer
          height="100%"
          width="100%"
          play={false}
          videoId={item?.key}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>{item?.name}</Text>
        <Text style={{ color: 'white', marginTop: 5 }}>{item?.published_at}</Text>
      </View>
    </View>
  );
}