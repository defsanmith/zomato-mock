import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Card from "./Card";

function Restaurant(props) {
  const handlePress = () => {
    props.navigation.navigate("Restaurant", {
      id: props.id,
    });
  };
  return (
    <Pressable onPress={handlePress}>
      <Card style={styles.restaurant}>
        <View style={styles.restaurantContainer}>
          <Image style={styles.thumb} source={{ uri: props.url }} />
          <View>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  restaurant: {
    margin: 5,
    marginVertical: 5,
  },
  restaurantContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  thumb: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
  },
});

export default Restaurant;
