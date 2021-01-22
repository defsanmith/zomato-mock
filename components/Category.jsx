import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import color from "../constants/color";

import Card from "./Card";

function Category(props) {
  const handleOnPress = () => {
    props.navigation.navigate("Restaurants", {
      category_id: props.id,
      category: props.title,
    });
  };
  
  return (
    <Pressable onPress={handleOnPress}>
      <Card style={styles.category}>
        <Text style={styles.title}>{props.title}</Text>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  category: {
    margin: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color: "#000",
  },
});

export default Category;
