import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./store";
import Drawer from "./routes/drawer";
import { StackContainer } from "./routes/StackContainer";
import { StatusBar } from "react-native";
import { TabContainer } from "./routes/TabContainer";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Tab"
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "tomato" },
          }}
        >
          <Drawer.Screen name="StackContainer" component={StackContainer} />
          <Drawer.Screen name="Tab" component={TabContainer} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
