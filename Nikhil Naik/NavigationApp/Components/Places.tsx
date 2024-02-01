import { PlacesProps } from "./Types/Types";
import { View, Text, FlatList, StyleSheet } from "react-native";

export const Places = ({ route, navigation }: PlacesProps) => {
  const { places } = route.params;
  return (
    <View style={style.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <View style={style.item}>
            <Text style={style.listText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: { margin: 4 },
  item: {
    backgroundColor: "white",
    margin: 4,
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 6,
    elevation: 20,
  },
  listText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
