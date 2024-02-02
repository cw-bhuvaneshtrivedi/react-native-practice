import React from "react";
import { View, Image, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import globalStyles from "../Styles";

type TopRowProps = {
  makeName: string;
  modelName: string;
  imageUrl: string;
};

export const TopRow = ({ makeName, modelName, imageUrl }: TopRowProps) => {
  const { flexRow, spaceBetween, image, mkName, mdName, topRow } = globalStyles;
  return (
    <View style={[flexRow, spaceBetween, topRow]}>
      {/* <Image style={image} source={require("../assets/icon.png")} /> */}
      <Image style={image} source={{ uri: imageUrl }} testID="image" />
      <View>
        <Text style={mkName} testID="mkName">
          {makeName}
        </Text>
        <Text style={mdName} testID="mdName">
          {modelName}
        </Text>
      </View>
      <Entypo name="chevron-right" size={24} color="#6f6f6f" />
    </View>
  );
};

// TopRow.defaultProps = {
//   makeName: "Mahindra",
//   modelName: "Thar",
//   imageUrl:
//     "https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
// };
