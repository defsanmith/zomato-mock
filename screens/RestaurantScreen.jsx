import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../components/Card";

function RestaurantScreen({ route, navigation }) {
  const { id } = route.params;

  const [details, setDetails] = useState();

  useEffect(() => {
    fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=" + id, {
      headers: {
        "user-key": "77f9b9bb18f62342ab4f5c078ced2829",
      },
    })
      .then((response) => response.json())
      .then((result) => setDetails(result));
  }, []);

  return details ? (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Image style={styles.thumb} source={{ uri: details.thumb }} />
        <View style={styles.resDetails}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            {details.name}
          </Text>
          <Text style={{ fontSize: 32, textAlign: "center" }}>
            {details.cuisines}
          </Text>
          <Text style={{ fontSize: 24, textAlign: "center" }}>
            {details.timings}
          </Text>
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            {details.location.locality}
          </Text>
        </View>
      </Card>
    </View>
  ) : (
    <View></View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    paddingTop: 50,
  },
  card: {
    margin: 5,
    alignItems: "center",
  },
  thumb: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  resDetails: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
  },
});

export default RestaurantScreen;
