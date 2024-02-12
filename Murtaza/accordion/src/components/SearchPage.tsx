import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ActivityIndicator,
  ScrollView,
  NativeScrollEvent,
} from "react-native";
import React, { useEffect, useMemo, useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import Accordion from "./Accordion";

const scHeight = Dimensions.get("screen").height;
const API_URL =
  "https://www.carwale.com/api/v1/models/?makeId=-1&type=new&year=-1&application=1";
const SearchPage = ({ clicked }: any) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const translateY = useSharedValue(scHeight);
  const scrollViewRef = useRef<ScrollView>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const structuredData = useMemo(() => {
    const makeMap = new Map<string, string[]>();
    data.forEach((item) => {
      const makeName = item.makeName;
      const modelName = item.modelName;
      if (makeMap.has(makeName)) {
        const models = makeMap.get(makeName) || [];
        models.push(modelName);
        makeMap.set(makeName, models);
      } else {
        makeMap.set(makeName, [modelName]);
      }
    });
    return makeMap;
  }, [data]);
  //   console.log(data);
  //   console.log(structuredData);
  const handleAccordionPress = (makeName: string) => {
    setOpenAccordion(makeName === openAccordion ? null : makeName);
  };

  const handleAccordionPressScroll = (index: number) => {
    // console.log(index);
    scrollViewRef.current?.scrollTo({
      x: 0,
      y: index * 50 + 16,
      animated: true,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Animated.View style={[styles.container, animatedStyle]} >
      {loading ? (
        <View style={styles.loaderContainer} testID="loading-indicator">
          <ActivityIndicator size="large" color="#0000ff" testID="loading-indicator" />
        </View>
      ) : (
        <>
          <View style={styles.searchHead} testID="search-title">
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
          <ScrollView ref={scrollViewRef} >
            {Array.from(structuredData).map(([makeName, models], index) => (
              <Accordion
                key={makeName}
                title={makeName}
                items={models}
                isOpen={makeName === openAccordion}
                onPress={() => {
                  handleAccordionPress(makeName);
                  handleAccordionPressScroll(index);
                }}
                // onPress={() => {handleAccordionPress(index);}}
              />
            ))}
          </ScrollView>
        </>
      )}
    </Animated.View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: scHeight,
    backgroundColor: "white",
    marginBottom: 20,
    paddingBottom: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
