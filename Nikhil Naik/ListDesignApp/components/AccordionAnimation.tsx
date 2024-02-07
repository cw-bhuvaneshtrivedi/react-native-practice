import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Card from "./Card";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeInUp,
  FadeOutUp,
  Easing,
} from "react-native-reanimated";

export default function AccordionAnimation({ open }: { open: boolean }) {
  const height = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    height: height.value,
  }));
  useEffect(() => {
    if (open) {
      height.value = withTiming(260, { duration: 300 });
    } else {
      height.value = withTiming(0, { duration: 300 });
    }
  }, [open]);
  return (
    <Animated.View style={[style, styles.container]}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
});
