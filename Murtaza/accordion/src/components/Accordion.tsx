import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import AccordionItem from "./AccordionItem";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const rotateZ = useSharedValue(0);

  const handleAccordionPress = () => {
    setIsOpen(!isOpen);
    rotateZ.value = withTiming(isOpen ? 0 : -180, {
      duration: 250,
      easing: Easing.inOut(Easing.quad),
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}` + "deg" }],
  }));
  const animatedItmeStyle = useAnimatedStyle(() => {
    const animatedHeight = isOpen ? withTiming(height) : withTiming(0);
    return {
        height: animatedHeight,
        overflow: "hidden"
    }
  });

  const onLayout = (event) => {
    const layoutHeight = event.nativeEvent.layout.height;
    if(layoutHeight > 0 && layoutHeight !== height ){
        setHeight(layoutHeight);
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleAccordionPress}>
        <Text style={styles.accordionTitle}>Accordion</Text>
        <Animated.View style={animatedStyle}>
          <Entypo name="chevron-down" size={24} color="black" />
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.line}></View>

      <Animated.View style={animatedItmeStyle}>
        <View onLayout={onLayout} style={{position: "absolute"}}>
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 16,
    paddingLeft: 28,
    paddingRight: 31,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    // marginTop: 20,
  },
  accordionTitle: {
    color: "#484848",
    fontSize: 15,
  },
  line: {
    backgroundColor: "#efefef",
    width: "100%",
    height: 1,
  },
});
