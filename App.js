import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryScreen from "./screens/CategoryScreen";
import RestaurantListScreen from "./screens/RestaurantListScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={CategoryScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantListScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 150,
  },
});
