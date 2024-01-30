import { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

import { Todo } from "./components/todo";
import styles from "./Styles";
import colors from "./constants/colors";

export default function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    { id: "1", task: "Create a TODO App" },
    { id: "2", task: "View YT video" },
  ]);

  return (
    <View style={styles.body}>
      <Text style={styles.title}>My Todos</Text>
      <View style={styles.rowFlex}>
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={setInput}
          placeholder="Add Something to do ..."
        />
        <Button
          color={colors.blue}
          title="Save"
          onPress={() => {
            if (input == "") {
              alert("Cannot add empty todo");
              return;
            }
            setTasks((tasks) => [
              ...tasks,
              { id: Date.now().toString(), task: input },
            ]);
            setInput("");
          }}
        />
      </View>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Todo
              id={item.id}
              todo={item.task}
              deleteTodo={() => {
                setTasks(tasks.filter((task) => task.id !== item.id));
                alert("Todo deleted");
              }}
            />
          )}
        />
      ) : (
        <Text>No todos left type to add</Text>
      )}
    </View>
  );
}
