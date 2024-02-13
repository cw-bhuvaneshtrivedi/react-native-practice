import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { ForwardedRef, useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import AccordionAnimated from "./AccordionAnimated";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type AccordionProps = {
  makeName: string;
  version: string[];
  setView: (index: number) => { index: number };
  index: number;
  view: number;
};
const Accordion = ({
  makeName,
  version,
  setView,
  index,
  view,
}: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const angle = useSharedValue(0);

  const handlePress = () => {
    setOpen(!open);
    if (open) {
      angle.value = withTiming(0);
      setView(-1);
    } else {
      angle.value = withTiming(180);
      // setOpen(false);
      setView(index);
    }
  };

  useEffect(() => {
    if (view != index && open) {
      setOpen(false);
      angle.value = withTiming(0);
    }
  }, [view]);

  const rotateIcon = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${angle.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.flexRow}
        onPress={handlePress}
        testID="drawer"
      >
        <Text style={styles.text}>{makeName}</Text>
        <Animated.View style={rotateIcon}>
          <Entypo name="chevron-down" size={24} color="#aaaaaa" />
        </Animated.View>
      </TouchableOpacity>
      <AccordionAnimated open={open} data={version} />
      <View style={styles.border}></View>
    </View>
  );
};
export default Accordion;
const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  flexRow: {
    paddingLeft: 28,
    height: 54,
    paddingRight: 28,
    flexDirection: "row",
    justifyContent: "space-between",
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
