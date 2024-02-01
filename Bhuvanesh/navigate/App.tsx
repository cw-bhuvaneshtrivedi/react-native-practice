import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./store";
import { StatusBar } from "react-native";
import Stack from "./routes/homeStack";
import { DrawerContainer } from "./routes/DrawerContainer";
import { Stack2 } from "./components/Stack2";
import { Stack1 } from "./components/Stack1";
import { Stack3 } from "./components/Stack3";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "tomato" },
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Drawer"
            component={DrawerContainer}
          />
          <Stack.Screen name="Stack1" component={Stack1} />
          <Stack.Screen name="Stack2" component={Stack2} />
          <Stack.Screen name="Stack3" component={Stack3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
