import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./navigations/Drawer";
import Stack from "./navigations/Stack";

import AllProducts from "./screens/AllProducts";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
    // <View>
    //   <AllProducts />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
