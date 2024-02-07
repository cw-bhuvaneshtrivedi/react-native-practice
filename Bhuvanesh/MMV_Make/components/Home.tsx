import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import Accordion from "./Accordion";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

type HomeProps = {
  setOpen: () => boolean;
};

export default function Home({ setOpen }: any) {
  const translateY = useSharedValue(SCREEN_HEIGHT);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const closeEffect = () => {
    translateY.value = withTiming(SCREEN_HEIGHT);
    setTimeout(() => setOpen(false), 250);
  };

  useEffect(() => {
    if (setOpen) {
      translateY.value = withTiming(0);
    }
  }, [setOpen]);
  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.flexRow}>
        <Text style={styles.text}>Select Your Make or Model</Text>
        <TouchableOpacity onPress={closeEffect}>
          <Entypo name="cross" size={24} color="#6f6f6f" />
        </TouchableOpacity>
      </View>
      {/* <AntDesign name="search1" size={24} color="black" /> */}
      <TextInput placeholder="Type to Select Make" style={styles.input} />
      <Accordion name="Maruti Suzuki" />
      <Accordion name="Maruti Suzuki" />
      <Accordion name="Maruti Suzuki" />
      <Accordion name="Maruti Suzuki" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    backgroundColor: "white",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    fontSize: 16,
  },
  input: {
    borderColor: "#d5d5d5",
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
    height: 44,
    paddingLeft: 16,
  },
});
