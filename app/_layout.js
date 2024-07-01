import { Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Slot />
    </>
  );
}
