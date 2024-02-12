import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import Accordion from "./Accordion";
import { AntDesign } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { act } from "@testing-library/react-native";
// import { data } from "./Mock/data";

const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;

const BottomDrawer = ({ open }: any) => {
  const [openedItem, setOpenItem] = useState(-1);
  const [view, setView] = useState(-1);
  const flashListRef = useRef(null);
  const [data, setData] = useState([]);
  const translateY = useSharedValue(HEIGHT);
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  const handleData = async (res) => {
    const carData = res.reduce((acc, curr) => {
      const { makeName, modelName, makeId } = curr;
      const findOj = acc.find((o) => o.makeName === makeName);
      if (!findOj) acc.push({ makeName, version: [modelName] });
      else findOj.version.push(modelName);
      return acc;
    }, []);
    await setData(carData);
    // console.log(data);
  };
  useEffect(() => {
    if (view != -1) {
      setTimeout(() => {
        if (flashListRef.current) {
          flashListRef.current.scrollToIndex({
            index: view,
            animated: true,
          });
        }
      }, 400);
    }
  }, [view]);
  const CloseEffect = () => {
    translateY.value = withTiming(HEIGHT, {
      duration: 300,
    });
    setTimeout(() => open(false), 250);
  };
  useEffect(() => {
    let temp = [];
    if (open) {
      translateY.value = withTiming(0, {
        duration: 300,
      });
      const _data = async () => {
        temp = await fetch(
          "https://www.carwale.com/api/v1/models/?makeId=-1&type=new&year=-1&application=1",
          {
            method: "GET",
          }
        ).then((res) => res.json());
        handleData(temp);
      };
      _data();
    }
  }, [open]);
  return (
    <Animated.View style={[styles.container, style]}>
      <View style={styles.mainHeader}>
        <View style={[styles.header]}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#484848" }}>
            Select Your Make or Model
          </Text>
          <TouchableOpacity onPress={CloseEffect}>
            <AntDesign name="closecircleo" size={24} color="#484848" />
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Type to Select Make "
          style={styles.searchBox}
        />
      </View>
      {data.length > 0 ? (
        <FlashList
          data={data}
          renderItem={({ item, index }) => (
            <Accordion data={item} idx={index} setView={setView} view={view} />
          )}
          estimatedItemSize={50}
          ref={flashListRef}
          getItemType={(item) => item.makeName}
          extraData={view}
          estimatedListSize={{ height: 500, width: 300 }}
        />
      ) : (
        <ActivityIndicator size="large" style={{ top: "30%" }} />
      )}
    </Animated.View>
  );
};

export default BottomDrawer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: HEIGHT,
    backgroundColor: "white",
  },
  closeButtonText: {
    alignSelf: "flex-end",
    padding: 5,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "grey",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBox: {
    borderRadius: 4,
    borderColor: "#d5d5d5",
    borderWidth: 2,
    borderStyle: "solid",
    width: "100%",
    marginTop: 10,
    height: 50,
    fontSize: 20,
    padding: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainHeader: {
    height: 120,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    marginBottom: 4,
  },
  bg: {
    // position: "absolute",
    width: WIDTH,
    height: 100,
  },
});
