import { Platform, StyleSheet, Text, View } from "react-native";
import { Result } from "./components/Result";
import { data } from "./components/Mock/Data";
import { StrictMode } from "react";

export default function App() {
  return (
    <StrictMode>
      <View style={styles.container}>
        <Result data={data} />
      </View>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: Platform.OS == "android" ? 40 : 0 },
});
