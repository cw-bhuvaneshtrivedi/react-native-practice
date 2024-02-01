import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { IRootState } from "../store";
import { RootParamList } from "./Component";
import { StackScreenProps } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";

type Screen2Props = StackScreenProps<RootParamList, "Screen2">;

export const Screen2 = ({ navigation, route }: Screen2Props) => {
  const city = useSelector<IRootState, string>((state) => state.city);
  const state = useSelector<IRootState, string>((state) => state.state);

  useEffect(() => console.log("Screen 2 render"));
  useFocusEffect(() => console.log("Screen 2 focus"));
  return (
    <View>
      <Text>
        This is Screen 2 City is {city}
        State is {state}
      </Text>
      <Button title="SECOND" onPress={() => navigation.navigate("Screen1")} />
    </View>
  );
};
