import React from "react";
import Drawer from "./drawer";
import { TabContainer } from "./TabContainer";
import { Stack1 } from "../components/Stack1";

export const DrawerContainer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Drawer.Screen name="TabContainer" component={TabContainer} />
      <Drawer.Screen name="Stack1" component={Stack1} />
    </Drawer.Navigator>
  );
};
