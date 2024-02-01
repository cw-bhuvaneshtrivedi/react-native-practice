import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackScreenProps } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";

import { IRootState } from "../store";
import RootParamList from "../types";
import { CHANGE_CITY, CHANGE_STATE } from "../actions";
import globalStyles from "../styles";

type Screen1Props = StackScreenProps<RootParamList, "Screen1">;

export const Screen1 = ({ navigation, route }: Screen1Props) => {
  // const city = useSelector<IRootState, string>((state) => state.city);
  // const state = useSelector<IRootState, string>((state) => state.state);

  const [city, setCity] = useState("");
  const [st, setSt] = useState("");
  const dispatch = useDispatch();
  const cit = useSelector<IRootState, string>((state) => state.city);
  const stat = useSelector<IRootState, string>((state) => state.state);

  const handleCityChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setCity(e.nativeEvent.text);
  };

  const handleStateChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSt(e.nativeEvent.text);
  };

  // const handleFocusEffect = () =>
  useEffect(() => console.log("Screen 1 render"));
  useFocusEffect(
    useCallback(() => {
      console.log("Screen 1 focus");
      setCity(cit);
      setSt(stat);
    }, [cit, stat])
  );

  const handleButtonClick = () => {
    dispatch(CHANGE_CITY(city));
    dispatch(CHANGE_STATE(st));
  };

  return (
    <View>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>
          This is Screen 1 {"\n"}City is {city} {"\n"}State is {st}
        </Text>
        <Button title="FIRST" onPress={() => navigation.navigate("Screen2")} />
      </View>
      <TextInput
        style={globalStyles.input}
        value={city}
        onChangeText={setCity}
        placeholder="Enter City here"
      />
      <TextInput
        style={globalStyles.input}
        value={st}
        onChangeText={setSt}
        placeholder="Enter State here"
      />
      <Button title="Save Changes" onPress={handleButtonClick} />
    </View>
  );
};
