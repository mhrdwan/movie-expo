import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
// import Bookmark from './pages/bookmark';

const TabLayout = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="red" />
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            headerTintColor: "#090e17",
          }}
        />
        <Tabs.Screen
          name="Bookmark"
          options={{
            title: "Bookmark",
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;