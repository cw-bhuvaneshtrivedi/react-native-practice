import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function AccordionAnimation({
  open,
  data,
}: {
  open: boolean;
  data: string[];
}) {
  const [temp, setTemp] = useState(0);
  const height = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    height: height.value,
  }));
  useEffect(() => {
    if (open) {
      height.value = withTiming(temp);
    } else {
      height.value = withTiming(0);
    }
  }, [open]);
  return (
    <Animated.View style={[styles.container, style]} testID="card">
      <View style={{ position: "absolute" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Card data={item} />}
          onLayout={(e) => setTemp(e.nativeEvent.layout.height)}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { overflow: "hidden" },
});
