import React, { useCallback, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { IRootState } from "../store";
import { StackScreenProps } from "@react-navigation/stack";
import RootParamList from "../types";
import { useFocusEffect } from "@react-navigation/native";
import globalStyles from "../styles";

type Screen3Props = StackScreenProps<RootParamList, "Screen3">;
export const Screen3 = ({ navigation, route }: Screen3Props) => {
  // const city = useSelector<IRootState, string>((state) => state.city);
  // const state = useSelector<IRootState, string>((state) => state.state);
  const [city, setCity] = useState("");
  const [st, setSt] = useState("");
  const cit = useSelector<IRootState, string>((state) => state.city);
  const stat = useSelector<IRootState, string>((state) => state.state);

  const handleFocusEffect = () => {
    console.log("Screen 3 focus");
    setCity(cit);
    setSt(stat);
  };
  useEffect(() => console.log("Screen 3 render"));
  useFocusEffect(
    useCallback(() => {
      console.log("Screen 3 focus");
      setCity(cit);
      setSt(stat);
    }, [cit, stat])
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        This is Screen3 {"\n"}City is {city} {"\n"}State is {st}
      </Text>
      <Button title="THIRD" onPress={() => navigation.navigate("Screen1")} />
      {/* <Text>Welcome to the home page of application</Text> */}
    </View>
  );
};
