import React, { MutableRefObject, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import globalStyles from "../Styles";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

type ListItemProps = {
  version: {
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
  };
  setCount: (fn: (count: number) => number) => void;
};

export const ListItem = ({ version, setCount }: ListItemProps) => {
  const [isShortList, setIsShortList] = useState(false);
  const [isCompare, setIsCompare] = useState(false);

  const {
    name,
    maxPower,
    displacement,
    transmission,
    fuelType,
    priceOverview,
    emi,
  } = version;
  const {
    flexRow,
    spaceBetween,
    listCard,
    buttonBackground,
    buttonText,
    specs,
    eMI,
    versionName,
    offers,
    price,
    overviewLabel,
    textList,
    alignEnd,
  } = globalStyles;

  const handleShortlistPress = () => {
    setCount((count: number) => count + (isShortList ? -1 : 1));
    setIsShortList((state) => !state);
  };

  const handleComparePress = () => {
    setIsCompare((state) => !state);
  };

  const Price = () => {
    return (
      <>
        <View style={[flexRow, spaceBetween, alignEnd]}>
          <Text style={price}>{priceOverview.price}</Text>
          <Text style={offers}>Show price in my city</Text>
          <Text style={eMI}>EMI</Text>
        </View>
        <View style={[flexRow, spaceBetween, alignEnd]}>
          <Text style={overviewLabel}>{priceOverview.label}</Text>
          <Text style={{ color: "#484848", fontStyle: "italic" }}>{emi}</Text>
        </View>
      </>
    );
  };

  const Specs = () => {
    return (
      <View style={[flexRow, spaceBetween, alignEnd]}>
        <Text style={specs}>{maxPower}</Text>
        <Text style={specs}>{displacement}</Text>
        <Text style={specs}>{transmission}</Text>
        <Text style={specs}>{fuelType}</Text>
      </View>
    );
  };
  const Buttons = () => {
    const colorBeforeClick = "#6f6f6f";
    const colorAfterClick = "#00afa0";
    return (
      <View style={[buttonBackground, flexRow]}>
        <TouchableOpacity
          style={[
            flexRow,
            { width: 120, justifyContent: "center", alignItems: "center" },
          ]}
          onPress={handleShortlistPress}
        >
          <Ionicons
            name={isShortList ? "bookmark" : "bookmark-outline"}
            size={12}
            color={isShortList ? colorAfterClick : colorBeforeClick}
          />
          <Text style={[buttonText, isShortList ? { color: "#484848" } : {}]}>
            {isShortList ? "Shortlisted" : "Shortlist"}
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: "#e1e1e1" }}>|</Text>
        <TouchableOpacity
          style={[
            flexRow,
            { width: 200, justifyContent: "center", alignItems: "center" },
          ]}
          onPress={handleComparePress}
        >
          <FontAwesome
            name="balance-scale"
            size={12}
            color={isCompare ? colorAfterClick : colorBeforeClick}
          />
          <Text style={[buttonText, isCompare ? { color: "#484848" } : {}]}>
            {isCompare ? "Remove from Compare" : "Add to Compare"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={listCard}>
      <View style={textList}>
        <Text style={versionName}>{name}</Text>
        <Specs />
        <Price />
      </View>
      <Buttons />
    </View>
  );
};
