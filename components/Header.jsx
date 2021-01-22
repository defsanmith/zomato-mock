import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/color";

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 80,
  },
  title: {
    fontSize: 20,
    color: "white",
  },
});

export default Header;
