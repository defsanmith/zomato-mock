import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Category from "../components/Category";

function CategoryScreen(props) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("https://developers.zomato.com/api/v2.1/categories", {
      headers: {
        "user-key": "77f9b9bb18f62342ab4f5c078ced2829",
      },
    })
      .then((response) => response.json())
      .then((result) => setCategories(result.categories));
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => {
          return (item.categories.id + index).toString();
        }}
        data={categories}
        renderItem={(category) => {
          return <Category title={category.item.categories.name} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default CategoryScreen;
