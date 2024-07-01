import { Platform, StatusBar, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pencarian from "../../components/pencarian";
import CardHome from "../../components/cardHome";
import CardImageFilm from "../../components/cardImageFilm";

export default function Home() {
  return (
    <ScrollView style={{ width: "100%" }} horizontal={false}>
      <CardHome />
      <View className="bg-primary  pl-4 pr-4">
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text className="text-white font-bold text-[20px]">For You</Text>
          <Text className="text-mainBlue">See All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-5 flex flex-row space-x-4"
        >
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
        </ScrollView>
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text className="text-white font-bold text-[20px]">
            Popular Movies
          </Text>
          <Text className="text-mainBlue">See All</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-5 flex flex-row space-x-4"
        >
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
          <View style={{ marginRight: 8 }}>
            <CardImageFilm />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
