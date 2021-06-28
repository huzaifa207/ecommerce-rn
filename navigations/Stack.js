import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import AllProducts from "../screens/AllProducts";
import Product from "../screens/Product";

const StackComp = createStackNavigator();

const Stack = () => {
  return (
    <StackComp.Navigator>
      <StackComp.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <StackComp.Screen
        name="AllProducts"
        component={AllProducts}
        options={{ title: "All Products" }}
      />
      <StackComp.Screen name="Product" component={Product} />
    </StackComp.Navigator>
  );
};

export default Stack;

const styles = StyleSheet.create({});
