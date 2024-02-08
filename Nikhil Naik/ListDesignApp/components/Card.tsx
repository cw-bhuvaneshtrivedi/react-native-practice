import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ data }: { data: string }) => {
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
    // position: "absolute",
    paddingLeft: 36,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  containerText: {
    color: "#484848",
    fontSize: 15,
    paddingTop: 16,
    paddingBottom: 16,
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "#efefef",
  },
});
