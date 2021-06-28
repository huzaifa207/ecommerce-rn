import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Drawer from "./navigations/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
