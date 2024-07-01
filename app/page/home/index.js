import { Platform, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pencarian from "../../components/pencarian";

export default function Home() {
  return (
    <SafeAreaView
      className="bg-primary"
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View className="pl-4">
        <Text className="text-white">Selamat Datang Kembali 👋</Text>
        <Text className="text-white font-extrabold text-[20px]">
          Mohamad Hasyim Ridwan
        </Text>
        <View>
          <Pencarian placeholder={'Cari Film yang akan di tonton'}/>
        </View>
      </View>
    </SafeAreaView>
  );
}
