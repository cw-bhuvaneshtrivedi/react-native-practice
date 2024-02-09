import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import FlashList from "@shopify/flash-list/dist/FlashList";
export default function AccordionAnimation({
  open,
  data,
}: {
  open: boolean;
  data: any;
}) {
  const [temp, setTemp] = useState(0);
  const height = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    height: height.value,
  }));
  // console.log(data + "anim");
  useEffect(() => {
    if (open) {
      height.value = withTiming(temp);
    } else {
      height.value = withTiming(0);
    }
  }, [open]);
  return (
    <Animated.View style={[styles.container, style]} testID="card">
      <View style={{ position: "absolute", width: "100%" }}>
        <FlashList
          data={data.version}
          renderItem={({ item }) => <Card data={item} />}
          onLayout={(e) => setTemp(e.nativeEvent.layout.height)}
          estimatedItemSize={50}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { overflow: "hidden" },
});
