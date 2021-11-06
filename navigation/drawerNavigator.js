import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TabNavigator from "./tabNavigator"
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name = 'Home' component = { TabNavigator }></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;