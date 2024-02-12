import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import AccordionItem from "./AccordionItem";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface AccordionProps {
  title: string;
  items: string[];
  isOpen: boolean;
  onPress: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, items, isOpen, onPress }) => {
  const rotateZ = useSharedValue(isOpen ? -180 : 0);

  useEffect(() => {
    rotateZ.value = withTiming(isOpen ? -180 : 0, {
      duration: 350,
      easing: Easing.inOut(Easing.quad),
    });
  }, [isOpen]);

  const handleAccordionPress = () => {
    onPress();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}` + "deg" }],
  }));

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleAccordionPress}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Animated.View style={animatedStyle}>
          <Entypo name="chevron-down" size={24} color="black" />
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.line}></View>

      {isOpen && (
        <View>
          {items.map((item, index) => (
            <AccordionItem key={index} itemName={item} />
          ))}
        </View>
      )}
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
