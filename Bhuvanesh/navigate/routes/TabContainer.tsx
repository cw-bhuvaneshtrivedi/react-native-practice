import React from "react";
import Tab from "./bottomTab";
import { Screen1 } from "../components/Screen1";
import { Screen2 } from "../components/Screen2";
import { Screen3 } from "../components/Screen3";
import { Screentmp } from "../components/Screentmp";

export const TabContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Screen2"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Screen1" component={Screen1} />
      <Tab.Screen name="Screen2" component={Screen2} />
      <Tab.Screen name="Screen3" component={Screen3} />
      <Tab.Screen
        name="Screentmp"
        component={Screentmp}
        initialParams={{ id: 2 }}
      />
    </Tab.Navigator>
  );
};
