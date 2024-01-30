type taskType={
  data:{
    data:string,
    status:boolean
  }[],
  completeTasks:number
}

import {
  ScrollView,
  View,
  FlatList,
  Text,
  StyleSheet,
  Button,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, taskComplete } from "../Redux/Task/TaskActions";
import { RootState } from "../Redux/Store";

export const Card = () => {
  const tasks = useSelector<RootState,taskType>((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <View>
      <Text style={styles.completedTasks}>
        {tasks.completeTasks}/{tasks.data.length} Tasks Complete
      </Text>
      <ScrollView>
        <FlatList
          data={tasks.data}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.cardText}>{item.data}</Text>
                {!item.status ? (
                  <Button
                    title="✓"
                    color="green"
                    onPress={(e) => dispatch(taskComplete(index))}
                  />
                ) : null}
                <Button
                  title="x"
                  color="red"
                  onPress={(e) => dispatch(removeTask(index))}
                />
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 4,
    margin: 5,
    padding: 5,
  },
  cardText: {
    fontSize: 20,
    flex: 3,
  },
  completedTasks: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-end",
    padding: 5,
  },
});
