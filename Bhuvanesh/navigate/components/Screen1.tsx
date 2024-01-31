import React, { useEffect } from "react";
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../store";
import { RootParamList } from "./Component";
import { StackScreenProps } from "@react-navigation/stack";
import { CHANGE_CITY, CHANGE_STATE } from "../actions";
import globalStyles from "../styles";
import { useFocusEffect } from "@react-navigation/native";

type Screen1Props = StackScreenProps<RootParamList, "Screen1">;

export const Screen1 = ({ navigation, route }: Screen1Props) => {
  const city = useSelector<IRootState, string>((state) => state.city);
  const state = useSelector<IRootState, string>((state) => state.state);
  const dispatch = useDispatch();

  const handleCityChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    dispatch(CHANGE_CITY(e.nativeEvent.text));
  };

  const handleStateChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    dispatch(CHANGE_STATE(e.nativeEvent.text));
  };
  useEffect(() => console.log("Screen 1 render"));
  useFocusEffect(() => console.log("Screen 1 focus"));

  return (
    <View>
      <View style={globalStyles.container}>
        <Text>
          This is Screen 1 City is {city}
          State is {state}
        </Text>
        <Button title="FIRST" onPress={() => navigation.navigate("Screen2")} />
      </View>
      <TextInput
        style={globalStyles.input}
        value={city}
        onChange={handleCityChange}
        placeholder="hello please City here"
      />
      <TextInput
        style={globalStyles.input}
        value={state}
        onChange={handleStateChange}
        placeholder="hello enter State here"
      />
    </View>
  );
};
