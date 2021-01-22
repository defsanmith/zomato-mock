import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { Link } from "react-router-native";
import color from "../constants/color";

import Card from "./Card";

function Category(props) {
  return (
    <Link to={"/" + props.title}>
      <Card style={styles.category}>
        <Text style={styles.title}>{props.title}</Text>
      </Card>
    </Link>
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
    color: color.primary,
  },
});

export default Category;
