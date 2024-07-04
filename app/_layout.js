import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useNavigationState } from "@react-navigation/native";
import { Text, View } from "react-native";
import TabLayout from "./(tabs)/_layout";
import { Stack } from "expo-router";

export default function RootLayout() {
  const state = useNavigationState((state) => state);

  const getCurrentRoute = () => {
    const route = state?.routes[state?.index] ?? {};
    return route.name || "Unknown";
  };

  return (
    <Stack>
      {/* <StatusBar style="auto" /> */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="detailHome/detailHomePage"
        options={({ route }) => ({
          title: route.params?.movieTitle || "Detail",
          headerBackTitle: "back",
          headerShown: true,
          headerTintColor: "#090e17",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
      {/* <Stack.Screen name="Tabs" component={TabLayout} /> */}
      {/* <Stack.Screen
          name="HomeDetail"
          component={HomeDetail}
          options={({ route }) => ({
            title: route.params?.movieTitle || "Detail",
            headerBackTitle: "back",
            headerShown: true,
            headerTintColor: "#090e17",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })}
        /> */}
      {/* <View style={{ padding: 10, backgroundColor: "lightgray" }}>
        <Text>Current Route: {getCurrentRoute()}</Text>
      </View> */}
    </Stack>
  );
}
