import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";

import styles from "../Styles";
import colors from "../constants/colors";

export const Todo = ({ todo, deleteTodo, id }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode="middle" style={styles.text} onPress={(e) => alert(todo)}>{todo}</Text>
      <Button
        style={styles.button}
        color={colors.red}
        title="remove"
        onPress={() => deleteTodo(id)}
      />
    </View>
  );
};
