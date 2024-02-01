import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../Home";
import { RootStackParamList } from "../../Types/Types";
import { TabNavigation } from "./TabNavigation";
import { Settings } from "../../Settings";
import { Location } from "../Location/Location";

const Drawer = createDrawerNavigator<RootStackParamList>();
export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => <Location />,
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
