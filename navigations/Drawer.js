import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Cart from "../screens/Cart";
import Stack from "./Stack";

const DrawerComp = createDrawerNavigator();
function Drawer() {
  return (
    <DrawerComp.Navigator initialRouteName="Home">
      <DrawerComp.Screen name="Home" component={Stack} />
      <DrawerComp.Screen name="Cart" component={Cart} />
    </DrawerComp.Navigator>
  );
}

export default Drawer;
