import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "./components/FormField";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function App() {
  const router = useRouter();
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    // Tambahkan logika autentikasi di sini jika diperlukan
    Alert.alert(
      "Login Berhasil",
      "Anda akan diarahkan ke Dashboard.",
      [
        {
          text: "OK",
          onPress: () => router.push("/page/home"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="p-4 w-full max-w-md">
          <Text className="text-white text-4xl font-extrabold mb-6">Login</Text>
          <FormField title="Username" placeholder="Masukkan Username" />
          <FormField
            title="Password"
            placeholder="Masukkan Password"
            password={true}
          />
          <View className="w-full mb-4">
            <TouchableOpacity
              onPress={handleLogin}
              className="border-2 border-black rounded-lg overflow-hidden mt-6 bg-orange-400 w-full h-[60px]"
            >
              <View className="flex-1 p-4">
                <Text className="text-black text-center font-extrabold text-[15px]">
                  Login
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
