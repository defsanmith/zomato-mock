import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { cos } from "react-native-reanimated";

import Restaurant from "../components/Restaurant";

function RestaurantListScreen({ route, navigation }) {
  const { id, category } = route.params;

  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=97656&entity_type=subzone&count=15&lat=19.0015505&lon=73.1198367&category=" +
        category,
      {
        headers: {
          "user-key": "77f9b9bb18f62342ab4f5c078ced2829",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setRestaurants(result.restaurants));
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item.restaurant.id}
        data={restaurants}
        renderItem={(restaurant) => (
          <Restaurant
            title={restaurant.item.restaurant.name}
            id={restaurant.item.restaurant.id}
            url={restaurant.item.restaurant.thumb}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default RestaurantListScreen;
