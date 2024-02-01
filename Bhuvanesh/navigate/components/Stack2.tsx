import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../types";
import globalStyles from "../styles";

type Stack2Props = StackScreenProps<StackParamList, "Stack2">;

export const Stack2 = ({ navigation, route }: Stack2Props) => {
  return (
    <View>
      <Text style={globalStyles.title}>This is Stack 2</Text>
      <Button
        title="Goto stack 3"
        onPress={() => navigation.navigate("Stack3")}
      />
    </View>
  );
};
