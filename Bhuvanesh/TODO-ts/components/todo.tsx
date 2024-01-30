import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

import styles from "../Styles";
import colors from "../constants/colors";

type Props = {
  todo: string;
  deleteTodo: Function;
  id: string;
};


export const Todo = ({ todo, deleteTodo, id }: Props) => {
  return (
    <View style={styles.container}>
      <Text
        numberOfLines={1}
        ellipsizeMode="middle"
        style={styles.text}
        onPress={(e) => alert(todo)}
      >
        {todo}
      </Text>
      <Button
        color={colors.red}
        title="remove"
        onPress={() => deleteTodo(id)}
      />
    </View>
  );
};
