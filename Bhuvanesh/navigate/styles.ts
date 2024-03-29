import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    width: 20,
  },
  input: {
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
});

export default globalStyles;
