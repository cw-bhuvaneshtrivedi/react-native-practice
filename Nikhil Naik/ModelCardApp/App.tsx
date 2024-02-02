import { Platform, StyleSheet, Text, View } from "react-native";
import { Result } from "./components/Result";
import { data } from "./components/Mock/Data";

export default function App() {
  return (
    <View style={styles.container}>
      <Result data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: Platform.OS == "android" ? 40 : 0 },
});
