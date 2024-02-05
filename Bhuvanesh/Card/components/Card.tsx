import React, { useCallback, useRef, useState } from "react";
import { View, FlatList } from "react-native";
import globalStyles from "../Styles";
import { TopRow } from "./TopRow";
import { ListItem } from "./ListItem";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { FlashList } from "@shopify/flash-list";
// SplashScreen.preventAutoHideAsync();

type CardProps = {
  carData: {
    makeName: string;
    modelName: string;
    versions: {
      name: string;
      maxPower: string;
      displacement: string;
      transmission: string;
      fuelType: string;
      priceOverview: {
        price: string;
        label: string;
      };
      emi: string;
    }[];
    hostUrl: string;
    originalImagePath: string;
  };
};

export const Card = ({ carData }: CardProps) => {
  const { makeName, modelName, versions, hostUrl, originalImagePath } = carData;
  // const [fontsLoaded, fontError] = useFonts({
  //   "@font/lato": require("../assets/fonts/Lato/Lato-Regular.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  // if (!fontsLoaded && !fontError) {
  //   console.log("error");
  //   return null;
  // }

  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.flexRow}>
      <View
        style={{
          height: globalStyles.card.height,
          width: 6,
          backgroundColor: count > 0 ? "#00afa0" : "white",
        }}
        testID="LeftMargin"
      ></View>
      <View style={globalStyles.card}>
        <TopRow
          makeName={makeName}
          modelName={modelName}
          // imageUrl={
          //   "https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80"
          // }
          imageUrl={`${hostUrl}/600x337${originalImagePath}`}
        />
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={versions}
          renderItem={({ item }) => (
            <ListItem version={item} setCount={setCount} />
          )}
        /> */}
        <FlashList
          horizontal={true}
          // initialNumToRender={100}
          estimatedItemSize={321}
          showsHorizontalScrollIndicator={false}
          data={versions}
          renderItem={({ item }) => (
            <ListItem version={item} setCount={setCount} />
          )}
        />
      </View>
    </View>
  );
};
