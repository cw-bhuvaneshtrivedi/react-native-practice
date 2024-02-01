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
import RootParamList from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import { CHANGE_CITY, CHANGE_STATE } from "../actions";
import globalStyles from "../styles";
import { useFocusEffect } from "@react-navigation/native";

type ScreentmpProps = StackScreenProps<RootParamList, "Screentmp">;

export const Screentmp = ({ navigation, route }: ScreentmpProps) => {
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
  useEffect(() => console.log(`Screen ${route.params.id} render`));
  useFocusEffect(() => console.log(`Screen ${route.params.id} focus`));

  return (
    <View>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
          This is Screen {route.params.id + "\n"}City is {city} {"\n"}State is{" "}
          {state}
        </Text>
        <Button
          title={`Screen ${route.params.id + 1}`}
          onPress={() =>
            navigation.navigate("Screentmp", { id: route.params.id + 1 })
          }
        />
      </View>
      <TextInput
        style={globalStyles.input}
        value={city}
        onChange={handleCityChange}
        placeholder="Enter City here"
      />
      <TextInput
        style={globalStyles.input}
        value={state}
        onChange={handleStateChange}
        placeholder="Enter State here"
      />
    </View>
  );
};
