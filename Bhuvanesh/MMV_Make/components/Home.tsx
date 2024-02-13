import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Entypo } from "@expo/vector-icons";
import Accordion from "./Accordion";
import { FlashList } from "@shopify/flash-list";
import { act } from "@testing-library/react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

type HomeProps = {
  setOpen: () => boolean;
};

export default function Home({ setOpen }: any) {
  const translateY = useSharedValue(SCREEN_HEIGHT);
  type Props = { makeName: string; modelName: string };
  let initialState: Props[] = [];
  const [carData, setCarData] = useState(initialState);
  const [view, setView] = useState(-1);
  const [searchText, setSearchText] = useState("");
  const listRef = useRef(null);
  const [filteredData, setFilteredData] = useState(initialState);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const closeEffect = () => {
    translateY.value = withTiming(SCREEN_HEIGHT);
    setTimeout(() => setOpen(false), 250);
  };

  useEffect(() => {
    getData();
    console.log("useeffect called");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (listRef.current !== null)
        listRef.current.scrollToIndex({ index: view, animated: true });
    }, 500);
  }, [view]);

  useEffect(() => {
    if (setOpen) {
      translateY.value = withTiming(0);
    }
  }, [setOpen]);

  const handleTextChange = (e) => {
    setSearchText(e);
    let data: { makeName: string; version: string[] }[] = [];
    carData.filter((item) => {
      let tmp = item.version.filter((model) =>
        model.toLowerCase().includes(e.toLowerCase())
      );
      // console.log(tmp, item.version);
      if (tmp.length > 0) {
        data.push({ makeName: item.makeName, version: tmp });
      }
    });
    // console.log(carData);
    console.log(data);
    setFilteredData(data);
  };

  const getData = async () => {
    const url =
      "https://www.carwale.com/api/v1/models/?makeId=-1&type=new&year=-1&application=1";
    let data: { makeName: string; modelName: string; makeId: number }[] =
      await fetch(url)
        .then(async (response) => {
          if (response.status !== 200) throw Error(response.statusText);
          return response.json();
        })
        .catch((error) => console.log(error));
    data = data.reduce((acc, curr) => {
      const { makeName, modelName, makeId } = curr;
      const findObj: Props | undefined = acc.find(
        (o: Props) => o.makeName === makeName
      );
      if (!findObj) acc.push({ makeName, version: [modelName] });
      else findObj.version.push(modelName);
      return acc;
    }, []);
    setCarData(data);
    setFilteredData(data);
    // await act(() => setCarData(data));
    // console.log(carData);
  };

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.flexRow}>
        <Text style={styles.text}>Select Your Make or Model</Text>
        <TouchableOpacity onPress={closeEffect}>
          <Entypo name="cross" size={24} color="#6f6f6f" />
        </TouchableOpacity>
      </View>
      {/* <AntDesign name="search1" size={24} color="black" /> */}
      <TextInput
        placeholder="Type to Select Make"
        style={styles.input}
        value={searchText}
        onChangeText={handleTextChange}
      />
      {filteredData.length > 0 ? (
        <FlashList
          data={filteredData}
          ref={listRef}
          getItemType={(item) => item.makeName}
          estimatedItemSize={50}
          estimatedListSize={{ height: 500, width: SCREEN_HEIGHT }}
          extraData={view}
          renderItem={({ item, index }) => (
            <Accordion
              makeName={item.makeName}
              version={item.version}
              index={index}
              setView={setView}
              view={view}
            />
          )}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
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
    paddingTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#484848",
  },
  input: {
    borderColor: "#d5d5d5",
    borderWidth: 1,
    marginLeft: 16,
    marginRight: 16,
    height: 44,
    paddingLeft: 16,
    marginTop: 31,
  },
});
