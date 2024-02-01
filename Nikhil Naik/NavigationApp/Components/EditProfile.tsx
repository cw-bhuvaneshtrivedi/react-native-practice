import { View, Button, TextInput, Text, StyleSheet } from "react-native";
import { EditProfileProps, editLocationType } from "./Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";
import { editLocation } from "./Redux/Location/LocationActions";
import { RootState } from "./Redux/Store";
import { useFocusEffect } from "@react-navigation/native";
export const EditProfile = ({ route, navigation }: EditProfileProps) => {
  const location = useSelector<RootState, editLocationType>(
    (state) => state.location
  );
  const [city, setCity] = useState(location.city);
  const [state, setState] = useState(location.state);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      setCity(location.city);
      setState(location.state);
    }, [location])
  );

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Your City"
        value={city}
        onChangeText={setCity}
        style={style.editTextField}
      ></TextInput>
      <TextInput
        placeholder="Your State"
        value={state}
        onChangeText={setState}
        style={style.editTextField}
      ></TextInput>
      <Button
        title="Save Changes"
        onPress={() =>
          dispatch(
            editLocation({
              city: city,
              state: state,
            })
          )
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    elevation: 10,
    padding: 10,
  },
  editTextField: {
    width: "100%",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 3,
    borderColor: "#d2d6d3",
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
