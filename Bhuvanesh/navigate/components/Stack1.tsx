import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../types";
import globalStyles from "../styles";

type Stack1Props = StackScreenProps<StackParamList, "Stack1">;

export const Stack1 = ({ navigation, route }: Stack1Props) => {
  return (
    <View>
      <Text style={globalStyles.title}>This is Stack 1</Text>
      <Button
        title="Goto stack 2"
        onPress={() => navigation.navigate("Stack2")}
      />
    </View>
  );
};
