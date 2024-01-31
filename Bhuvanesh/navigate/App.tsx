import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import store from "./store";
import Drawer from "./routes/drawer";
import Stack from "./routes/homeStack";
import { Screen1 } from "./components/Screen1";
import { Screen2 } from "./components/Screen2";
import { Screen3 } from "./components/Screen3";
import Tab from "./routes/bottomTab";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Drawer.Navigator>
          <Drawer.Screen name="Screen1" component={Screen1} />
          <Drawer.Screen name="Screen2" component={Screen2} />
          <Drawer.Screen name="Screen3" component={Screen3} />
        </Drawer.Navigator> */}
        <Stack.Navigator>
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
        {/* <Tab.Navigator>
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}
