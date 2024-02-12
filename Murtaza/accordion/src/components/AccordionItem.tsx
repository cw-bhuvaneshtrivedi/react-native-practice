import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

interface AccordionItemProps {
  itemName: string;
}
const AccordionItem: React.FC<AccordionItemProps> = ({ itemName }) => {
  return (
    <View style={styles.container} testID="accordion-item">
      <View style={styles.item}>
        <Text style={styles.text} >{itemName}</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default AccordionItem;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
  },
  item: {
    backgroundColor: "#f9f9f9",
    paddingLeft: 36,
    paddingTop: 16,
    paddingBottom: 16,
    height: 50,
  },
  text: {
    fontSize: 15,
    color: "#484848",
  },
  line: {
    backgroundColor: "#efefef",
    width: "100%",
    height: 1,
  },
});
