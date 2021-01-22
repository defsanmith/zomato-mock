import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

function RestaurantScreen({ match, setHeader }) {
  useEffect(() => {
    setHeader(match.params.category);
  }, []);
  return (
    <View>
      <Text>{match.params.category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default RestaurantScreen;
