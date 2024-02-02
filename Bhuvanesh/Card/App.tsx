import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import globalStyles from "./Styles";
import { Card } from "./components/Card";
import { FlashList } from "@shopify/flash-list";
import tmp from "./tmp.json";

export default function App() {
  return (
    <View style={globalStyles.body}>
      <StatusBar />
      <FlashList
        data={tmp.models}
        estimatedItemSize={360}
        renderItem={({ item }) => <Card carData={item} />}
      />
      {/* <Card /> */}
    </View>
  );
}
