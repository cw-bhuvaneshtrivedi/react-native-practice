import React, { useCallback, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

import { IRootState } from "../store";
import RootParamList from "../types";
import globalStyles from "../styles";

type Screen2Props = StackScreenProps<RootParamList, "Screen2">;

export const Screen2 = ({ navigation, route }: Screen2Props) => {
  // const city = useSelector<IRootState, string>((state) => state.city);
  // const state = useSelector<IRootState, string>((state) => state.state);
  const [city, setCity] = useState("");
  const [st, setSt] = useState("");
  const cit = useSelector<IRootState, string>((state) => state.city);
  const stat = useSelector<IRootState, string>((state) => state.state);

  const handleFocusEffect = () => {
    console.log("Screen 2 focus");
    setCity(cit);
    setSt(stat);
    console.log(cit + stat);
    console.log(city + st);
  };
  useEffect(() => console.log("Screen 2 render"));
  useFocusEffect(
    useCallback(() => {
      console.log("Screen 2 focus");
      setCity(cit);
      setSt(stat);
      console.log(cit + stat);
      console.log(city + st);
    }, [cit, stat])
  );
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        This is Screen 2{"\n"}City is {city} {"\n"}State is {st}
      </Text>
      <Button title="SECOND" onPress={() => navigation.navigate("Screen3")} />
    </View>
  );
};
