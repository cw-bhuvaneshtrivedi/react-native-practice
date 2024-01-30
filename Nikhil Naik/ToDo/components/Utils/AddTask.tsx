import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { addTask } from "../Redux/Task/TaskActions";
import { useDispatch } from "react-redux";

export const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={styles.field}>
      <TextInput
        style={styles.inputBox}
        value={input}
        onChangeText={setInput}
        placeholder="Enter the Task"
      />
      <Button
        title="Save"
        onPress={(e) => {
          dispatch(addTask({ data: input, status: false }));
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    flexDirection: "row",
    maxWidth: Dimensions.get("window").width,
    paddingHorizontal: 4,
  },
  inputBox: {
    borderWidth: 3,
    borderColor: "black",
    padding: 5,
    flex: 4,
    borderRadius: 3,
    fontSize: 20,
  },
});
