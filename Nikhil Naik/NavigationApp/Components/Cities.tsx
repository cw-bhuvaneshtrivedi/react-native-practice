import { info } from "./MockData/Data";
import { View, Text, ListRenderItemInfo, Button, FlatList } from "react-native";
import { CityProps, CityType } from "./Types/Types";
export const Cities = ({ route, navigation }: CityProps) => {
  return (
    <View>
      <FlatList
        data={info}
        renderItem={({ item }: ListRenderItemInfo<CityType>) => (
          <View>
            <Text>{item.city}</Text>
            <Button
              title="Move"
              onPress={(e) => {
                navigation.navigate("CityDescription", {
                  city: item.city,
                  state: item.state,
                  description: item.description,
                  places: item.places,
                });
              }}
            />
            <Button title="show" onPress={() => console.log(item)} />
          </View>
        )}
      />
    </View>
  );
};
