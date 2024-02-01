import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { StackParamList } from "../types";
import globalStyles from "../styles";

type StacktempProps = StackScreenProps<StackParamList, "Stacktmp">;

export const Stacktemp = ({ navigation, route }: StacktempProps) => {
  return (
    <View>
      <Text style={globalStyles.title}>This is Stack {route.params.id}</Text>
      <Button
        title={`Goto stack${route.params.id + 1}`}
        onPress={() =>
          navigation.navigate("Stacktmp", { id: route.params.id + 1 })
        }
      />
    </View>
  );
};
