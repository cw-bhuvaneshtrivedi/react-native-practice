import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import { useState } from "react";
import { Button, Platform, StyleSheet, View } from "react-native";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.body}>
        {isOpen && <Home setOpen={setIsOpen} />}
        <Button title="Open" onPress={() => setIsOpen(true)} testID="Open" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? 24 : 0,
    // justifyContent: "center",
  },
});
