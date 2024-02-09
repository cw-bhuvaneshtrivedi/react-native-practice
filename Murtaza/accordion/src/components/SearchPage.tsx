import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import Accordion from "./Accordion";

const scHeight = Dimensions.get("screen").height;
const SearchPage = ({ clicked }: any) => {
  const translateY = useSharedValue(scHeight);
  
  const handleClose = () => {
    translateY.value = withTiming(scHeight, {
      duration: 250,
    });
    setTimeout(() => clicked(false), 250);
  };
  useEffect(() => {
    if (clicked) {
      translateY.value = withTiming(0, {
        duration: 250,
      });
    }
  }, [clicked]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={styles.searchHead}>
        <View style={[styles.searchTitleBar]}>
          <Text style={styles.titleText}>Select Your Make or Model</Text>
          <TouchableOpacity onPress={handleClose} testID="close-button">
            <Ionicons name="close-circle" size={27} color="#484848" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Type to Select Make "
          style={styles.searchBar}
        />
      </View>
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
    </Animated.View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    height: scHeight,
    backgroundColor: "white",
    marginBottom: 20,
  },
  searchHead: {
    height: 100,
    padding: 16,
    marginBottom: 20,
  },
  searchTitleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "bold",
    color: "#484848",
    fontSize: 16,
  },
  searchBar: {
    height: 44,
    marginTop: 20,
    paddingLeft: 16,
    fontSize: 16,
    color: "#aaaaaa",
    borderStyle: "solid",
    borderColor: "#d5d5d5",
    borderRadius: 3,
    borderWidth: 2,
  },
});
