import {
  View,
  Text,
  Button,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";
import { CityType, HomeProps } from "./Types/Types";
import { info } from "./MockData/Data";

export const Home = ({ route, navigation }: HomeProps) => {
  return (
    <View style={style.container}>
      <FlatList
        data={info}
        renderItem={({ item }: ListRenderItemInfo<CityType>) => (
          <View style={style.item}>
            <Text style={style.itemText}>{item.city}</Text>
            <Button
              title="View"
              onPress={() =>
                navigation.navigate("CityDescription", {
                  city: item.city,
                  state: item.state,
                  description: item.description,
                  places: item.places,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 5,
    margin: 5,
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "black",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
