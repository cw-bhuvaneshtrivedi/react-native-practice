import { View, Text, StyleSheet, Button } from "react-native";
import { CityDescriptionProps } from "./Types/Types";

export const CityDescription = ({
  route,
  navigation,
}: CityDescriptionProps) => {
  const { city, state, description, places } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city ? city : ""}</Text>
      <Text style={styles.text}>{state ? state : ""}</Text>
      <Text style={styles.text}>{description ? description : ""}</Text>
      <Button
        title="See popular places"
        onPress={() =>
          navigation.navigate("Places", {
            places: places,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 4,
    alignItems: "center",
    margin: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10,
    height: "50%",
    elevation: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
  text: {
    padding: 5,
  },
});
