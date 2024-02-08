import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BottomDrawer from "./BottomDrawer";

const Homepage = () => {
  const [open, setOpen] = useState(false);
  return (
    <View>
      {open ? <BottomDrawer open={setOpen} /> : null}
      <TouchableOpacity
        onPress={(e) => {
          setOpen(true);
        }}
        testID="homepageButton"
      >
        <View style={styles.button}>
          <Text style={styles.text}>Open</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  text: { fontWeight: "bold", fontSize: 20 },
});
