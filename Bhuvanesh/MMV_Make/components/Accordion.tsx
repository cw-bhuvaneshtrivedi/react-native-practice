import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import AccordionAnimated from "./AccordionAnimated";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type AccordionProps = {
  name: string;
};
export default function Accordion({ name }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const angle = useSharedValue(0);

  const handlePress = () => {
    setOpen(!open);
    if (open) angle.value = withTiming(0);
    else angle.value = withTiming(180);
  };

  const rotateIcon = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${angle.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.flexRow} onPress={handlePress}>
        <Text style={styles.text}>{name}</Text>
        <Animated.View style={rotateIcon}>
          <Entypo name="chevron-down" size={24} color="black" />
        </Animated.View>
      </TouchableOpacity>
      <AccordionAnimated name="Maruti" open={open} />
      <View style={styles.border}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  flexRow: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  border: {
    height: 1,
    backgroundColor: "#efefef",
  },
});
