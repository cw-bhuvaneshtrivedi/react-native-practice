import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  Platform,
  Dimensions,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import {Card} from "./src/components/Card";
import {data} from "./src/data/Data";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <Text>check...</Text> */}
      <FlashList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        estimatedItemSize={284}
        getItemType={(item) => item.modelId}
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: Dimensions.get( 'window' ).height,
    width: Dimensions.get('window').width,
    paddingTop: Platform.OS === "android" ?  StatusBar.currentHeight : 0,
  },
});
