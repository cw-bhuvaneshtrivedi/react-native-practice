import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { Card } from "./Card/Card";
import { AddTask } from "./Utils/AddTask";

export const HomePage = () => {
  return (
    <View style={styles.cont}>
      <Text style={styles.title}>To-Do App</Text>
      <AddTask />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {},
  field: {
    flexDirection: "row",
    maxWidth: Dimensions.get("window").width,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  inputBox: {
    borderWidth: 5,
    borderColor: "black",
    padding: 5,
    flex: 4,
  },
});
