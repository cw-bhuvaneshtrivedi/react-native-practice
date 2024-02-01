import "react-native-gesture-handler";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";
import { StackNavigation } from "./Components/Utils/Navigation/StackNavigation";
import { DrawerNavigation } from "./Components/Utils/Navigation/DrawerNavigation";
import { TabNavigation } from "./Components/Utils/Navigation/TabNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="white" />
      <StackNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? 10 : 0,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
