import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.containerText}>Hyundai</Text>
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 36,
    paddingRight: 30,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  containerText: {
    color: "#484848",
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "#efefef",
  },
});
