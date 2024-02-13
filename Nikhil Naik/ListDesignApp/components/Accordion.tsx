import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import AccordionAnimation from "./AccordionAnimation";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const Accordion = ({ data, idx, setView, view }) => {
  const [close, setClose] = useState(false);
  // const close = useRef(false);
  const rotateZ = useSharedValue(0);
  const style = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}` + "deg" }],
  }));
  const handle = () => {
    if (rotateZ.value == -180)
      rotateZ.value = withTiming(rotateZ.value + 180, { duration: 300 });
    else rotateZ.value = withTiming(rotateZ.value - 180, { duration: 300 });
  };
  useEffect(() => {
    // if (close.current && view != -1 && view != idx) {
    //   handle();
    //   // setClose(false);
    //   close.current = false;
    // }
    if (close && view != -1 && view != idx) {
      handle();
      setClose(false);
      // close.current = false;
    }
  }, [view]);
  const handlePress = () => {
    // if (close.current) {
    //   // setClose(!close);
    //   close.current = false;
    //   handle();
    // } else {
    //   // setClose(!close);
    //   close.current = true;
    //   handle();
    //   setView((item: number) => {
    //     return idx;
    //   });
    // }
    if (close) {
      setClose(!close);
      handle();
    } else {
      setClose(!close);
      handle();
      setView((item: number) => {
        return idx;
      });
    }
  };
  return (
    <ScrollView testID="accordion">
      <TouchableOpacity onPress={handlePress} testID="accordionButton">
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
