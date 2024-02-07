import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ListRenderItemInfo,
  Dimensions,
} from "react-native";
import { InfoCard } from "./InfoCard";
import { DescriptionCard } from "./DescriptionCard";
import { verType } from "./Types/Type";
import { useState } from "react";
import { FlashList } from "@shopify/flash-list";

export const Card = ({ item }) => {
  const windowWidth = Dimensions.get("window").width;
  const [save, SetSave] = useState(0);
  return (
    <View>
      <View style={style.sep}></View>
      <View style={{ flexDirection: "row" }}>
        <View
          testID="sideBar"
          style={{
            flex: 1,
            height: 309,
            width: 4,
            backgroundColor: save > 0 ? "#00afa0" : "white",
          }}
        ></View>
        <View style={style.container}>
          <DescriptionCard
            img={item.hostUrl + "600x337" + item.originalImagePath}
            maker={item.makeName}
            model={item.modelName}
          />
          <FlashList
            data={item.versions}
            renderItem={(ver: ListRenderItemInfo<any>) => (
              <InfoCard ver={ver.item} border={SetSave} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            estimatedItemSize={321}
            estimatedListSize={{
              height: 170,
              width: windowWidth,
            }}
            getItemType={(item) => item.name}
          />
          {/* <FlatList
            data={item.versions}
            renderItem={(ver: ListRenderItemInfo<any>) => (
              <InfoCard ver={ver.item} border={SetSave} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          /> */}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: "#6f6f6f",
    backgroundColor: "white",
    height: 310,
    justifyContent: "flex-end",
    width: 405,
    paddingLeft: 17,
    paddingBottom: 21,
  },
  list: {
    flexDirection: "row",
    paddingRight: 17,
  },
  sep: {
    paddingLeft: 0,
    height: 4,
    backgroundColor: "#e1e1e1",
  },
});

{
  /* <InfoCard ver={ver} border={SetSave} data={save} /> */
}
