import { Card } from "./Card";
import { View, ScrollView, Text, FlatList, Dimensions } from "react-native";
import { FlashList } from "@shopify/flash-list";

export const Result = ({ data }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={{ width: windowWidth, height: windowHeight }}>
      <FlashList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        estimatedItemSize={30}
      />
    </View>
  );
};
