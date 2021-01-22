import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Header from "./components/Header";

import CategoryScreen from "./screens/CategoryScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

export default function App() {
  const [header, setHeader] = useState("Categories");

  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header title={header} />
        <Route exact path="/" component={CategoryScreen} />
        <Route
          path="/:category"
          render={(props) => <RestaurantScreen setHeader={setHeader} {...props} />}
        />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 150,
  },
});
