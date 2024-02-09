import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ data }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.containerText} testID="cardName">
          {data}
        </Text>
      </View>
      <View style={styles.seperator}></View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 38,
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  containerText: {
    color: "#484848",
    fontSize: 15,
    paddingTop: 16,
    paddingBottom: 16,
    // width: "50%",
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "#efefef",
  },
});
