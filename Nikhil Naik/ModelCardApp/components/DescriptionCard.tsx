import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { DescriptionProp } from "./Types/Type";

export const DescriptionCard = ({ img, maker, model }: DescriptionProp) => {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri: img,
        }}
        style={style.image}
        testID="carImage"
      />
      <View style={style.name}>
        <Text style={style.maker} testID="makerName">
          {maker}
        </Text>
        <Text style={style.model} testID="modelName">
          {model}
        </Text>
      </View>
      <View style={style.arrow}>
        <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: 301,
    paddingBottom: 21,
    paddingTop: 20,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 130,
    height: 73,
  },
  maker: {
    fontSize: 13,
    color: "#aaaaaa",
  },
  model: {
    fontSize: 18,
    color: "#484848",
    paddingTop: 4,
  },
  name: {
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
  },
  arrow: {
    marginRight: 0,
    marginLeft: "auto",
    alignSelf: "center",
  },
});
