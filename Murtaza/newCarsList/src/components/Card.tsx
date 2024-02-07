import { useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { ItemCard } from "./ItemCard";
export const Card = ({ item }:any) => {
  const [selected, SetSelected] = useState(0);
  return (
    <View style={styles.row}>
      <View
        style={{
          height: 305,
          width: 5,
          backgroundColor: selected > 0 ? "#00afa0" : "white",
        }}
        testID="sideLine"
      ></View>
      <View style={styles.card}>
        <View style={styles.head}>
          <Image
            source={{
              uri: item.hostUrl + "600x337" + item.originalImagePath,
            }}
            style={styles.image}
            testID="carImage"
          />
          <View style={styles.HeadText}>
            <Text style={styles.company} testID="makerName">
              {item.makeName}
            </Text>
            <Text style={styles.model} testID="modelName">
              {item.modelName}
            </Text>
          </View>
          <View style={styles.arrow}>
            <MaterialIcons name="arrow-forward-ios" size={15} color="gray" />
          </View>
        </View>
        <FlashList
          data={item.versions}
          renderItem={({ item }) => (
            <ItemCard variations={item} select={SetSelected} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={335}
          estimatedListSize={{
            height: 170,
            width: Dimensions.get("window").width,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
  card: {
    flex: 1,
    width: 360,
    paddingLeft: 10,
    paddingTop: 13,
    backgroundColor: "white",
    height: 305,
    justifyContent: "flex-end",
  },
  head: {
    width: 360,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 130,
    height: 73,
  },
  HeadText: {
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
  },
  company: {
    fontSize: 13,
    color: "#aaaaaa",
  },
  model: {
    fontSize: 18,
    color: "#484848",
    paddingTop: 4,
  },
  arrow: {
    marginLeft: 66,
    alignSelf: "center",
  },
});
