import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { IRootState } from "../store";
import { StackScreenProps } from "@react-navigation/stack";
import { RootParamList } from "./Component";
import { useFocusEffect } from "@react-navigation/native";

type Screen3Props = StackScreenProps<RootParamList, "Screen3">;
export const Screen3 = ({ navigation, route }: Screen3Props) => {
  const city = useSelector<IRootState, string>((state) => state.city);
  const state = useSelector<IRootState, string>((state) => state.state);

  useEffect(() => console.log("Screen 3 render"));
  useFocusEffect(() => console.log("Screen 3 focus"));

  return (
    <View>
      <Text>
        This is Screen3 City is {city}
        State is {state}
      </Text>
      <Button title="THIRD" onPress={() => navigation.navigate("Screen2")} />
    </View>
  );
};
