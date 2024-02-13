// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import React from "react";

// interface AccordionItemProps {
//   itemName: string;
// }
// const AccordionItem: React.FC<AccordionItemProps> = ({ itemName }) => {
//   return (
//     <View style={styles.container} >
//       <View style={styles.item}>
//         <Text style={styles.text} >{itemName}</Text>
//       </View>
//       <View style={styles.line}></View>
//     </View>
//   );
// };

// export default AccordionItem;

// const styles = StyleSheet.create({
//   container: {
//     width: Dimensions.get("screen").width,
//   },
//   item: {
//     backgroundColor: "#f9f9f9",
//     paddingLeft: 36,
//     paddingTop: 16,
//     paddingBottom: 16,
//     height: 50,
//   },
//   text: {
//     fontSize: 15,
//     color: "#484848",
//   },
//   line: {
//     backgroundColor: "#efefef",
//     width: "100%",
//     height: 1,
//   },
// });

import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

interface AccordionItemProps {
  itemName: string;
  searchText: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  itemName,
  searchText,
}) => {
  const renderHighlightedText = () => {
    if (!searchText.trim()) return itemName;

    const parts = itemName.split(new RegExp(`(${searchText})`, "gi"));
    return (
      <Text>
        {parts.map((part, index) =>
          part.toLowerCase() === searchText.toLowerCase() ? (
            <Text key={index} style={{ fontWeight: "bold" }}>
              {part}
            </Text>
          ) : (
            <Text key={index}>{part}</Text>
          )
        )}
      </Text>
    );
  };

  return (
    <View style={styles.container} testID="accordion-item">
      <View style={styles.item}>
        <Text style={styles.text}>{renderHighlightedText()}</Text>
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
