import { StyleSheet } from "react-native";

import colors from "./constants/colors";

export default styles = StyleSheet.create({
    container: {
        color: colors.grey,
        flexDirection: "row",
        borderWidth: 4,
        borderColor: colors.grey,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        padding: 10,
      },
      text: {
        width: "70%",
        fontSize: 20,
        color: colors.grey,
      },
      button: {
        width: "30%",
      },
      body: {
        flex: 1,
        backgroundColor: colors.whitesmoke,
        alignItems: "center",
      },
      rowFlex: {
        flexDirection: "row",
      },
      input: {
        borderWidth: 1,
        width: "70%",
        height: "min-content",
        fontSize: 20,
      },
      title: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.lightBlack,
      },
})