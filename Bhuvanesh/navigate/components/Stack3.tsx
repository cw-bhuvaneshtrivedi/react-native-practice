import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, Button } from "react-native";
import { StackParamList } from "../types";
import globalStyles from "../styles";

type Stack3Props = StackScreenProps<StackParamList>;

export const Stack3 = ({ navigation, route }: Stack3Props) => {
  return (
    <View>
      <Text style={globalStyles.title}>This is Stack 3</Text>
      <Button
        title="Goto stack 4"
        onPress={() => navigation.navigate("Stacktmp", { id: 4 })}
      />
    </View>
  );
};
