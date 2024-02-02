import { Text, View, Button, StyleSheet } from "react-native";
import { ProfileProps, editLocationType } from "./Types/Types";
import { useSelector } from "react-redux";
import store, { RootState } from "./Redux/Store";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import React from "react";

const renderfn = () => console.log("Rendered");

const Profile = ({ route, navigation }: ProfileProps) => {
  const location = useSelector<RootState, editLocationType>(
    (state) => state.location
  );
  const [temp, setTemp] = useState<editLocationType>({ city: "", state: "" });
  useFocusEffect(
    useCallback(() => {
      // whatever
      console.log("from callback ");
      console.log(location);
      setTemp(location);
      console.log(temp);
    }, [location])
  );
  useEffect(() => {
    console.log("from effect");
    console.log(location);
    console.log(temp);
  });
  return (
    <View style={style.container}>
      <Text style={style.text}>City: {temp.city}</Text>
      <Text style={style.text}>State: {temp.state}</Text>
      <Button
        title="Edit Profile"
        onPress={(e) => navigation.navigate("EditProfile")}
      />
    </View>
  );
};

export default React.memo(Profile);

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 4,
    elevation: 10,
  },
  text: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
});
