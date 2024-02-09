import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import AccordionAnimation from "./AccordionAnimation";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Accordion = ({ data, idx, setView }) => {
  const [close, setClose] = useState(false);
  const rotateZ = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}` + "deg" }],
  }));
  const handle = () => {
    if (rotateZ.value == -180)
      rotateZ.value = withTiming(rotateZ.value + 180, { duration: 300 });
    else rotateZ.value = withTiming(rotateZ.value - 180, { duration: 300 });
  };
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          setClose(!close);
          handle();
          if (!close) {
            setView((i: number) => {
              return idx;
            });
          } else
            setView((i: number) => {
              return -1;
            });
        }}
        testID="accordionButton"
      >
        <View style={styles.container}>
          <Text style={styles.accordionText}>{data.makeName}</Text>
          <Animated.View style={[style]}>
            <Feather name="chevron-down" size={30} color="#aaaaaa" />
          </Animated.View>
        </View>
      </TouchableOpacity>
      <View style={styles.seperator}></View>
      <AccordionAnimation open={close} data={data} />
    </ScrollView>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 28,
    paddingRight: 30,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionText: {
    fontSize: 15,
    color: "#484848",
  },
  seperator: {
    width: "100%",
    height: 2,
    backgroundColor: "#efefef",
  },
});
