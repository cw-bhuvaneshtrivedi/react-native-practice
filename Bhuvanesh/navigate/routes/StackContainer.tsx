import React from "react";
import Stack from "./homeStack";
import { Screen1 } from "../components/Screen1";
import { Screen2 } from "../components/Screen2";
import { Screen3 } from "../components/Screen3";

export const StackContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName="Screen1"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ title: "Title for Stack 1" }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: "Title for Stack 2" }}
      />
      <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{ title: "Title for Stack 3" }}
      />
    </Stack.Navigator>
  );
};
