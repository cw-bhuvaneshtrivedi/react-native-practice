import React from "react";
import { Text } from "react-native";

export const Component = (id: number) => {
  return <Text>{id}</Text>;
};

export type RootParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

/*
export const Screen1 = ({navigation} : Screen1Props) => {
  // return <Text onPress={() => navigation.navigate('Screen2',{paramA:"Bhuvanesh"})}>Screen1</Text>
  return <Button title='press me' onPress={() => navigation.push('Screen2',{paramA:"bhuvanesh"})}/>
}

export const Screen2 = ({navigation,route} : Screen2Props) => {
  return <Text>Screen2 {route.params.paramA}</Text>
}

export const Screen3 = ({navigation,route} : Screen3Props) => {
  return <Text>Scree3</Text>
}*/
