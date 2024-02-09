import {
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import SearchPage from "./src/components/SearchPage";
export default function App() {
  const [click, setClick] = useState(false);
  const handlePress = () => {
    setClick(true);
  };
  return (
    <View style={styles.container}>
      {click ? <SearchPage clicked={setClick} /> : null}
      <View>
        <TouchableOpacity onPress={handlePress} style={styles.page}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Click Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
  page: { 
    justifyContent: "center", 
    height: Dimensions.get("screen").height },
  button: {
    // flex: 1,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    // alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
});
