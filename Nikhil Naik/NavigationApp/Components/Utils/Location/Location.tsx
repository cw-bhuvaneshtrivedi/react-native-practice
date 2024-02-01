import { EvilIcons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Modal,
  Text,
  Alert,
  Button,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { editLocationType } from "../../Types/Types";
import { editLocation } from "../../Redux/Location/LocationActions";
import { useFocusEffect } from "@react-navigation/native";

export const Location = () => {
  const location = useSelector<RootState, editLocationType>(
    (state) => state.location
  );
  const [city, setCity] = useState(location.city);
  const [state, setState] = useState(location.state);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setCity(location.city);
      setState(location.state);
    }, [location])
  );
  return (
    <Pressable onPress={(e) => setVisible(!visible)}>
      <View>
        <EvilIcons name="location" size={35} color="black" />
      </View>
      {visible ? (
        <Modal
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setVisible(!visible);
          }}
        >
          <View style={style.modalView}>
            <Pressable>
              <Text
                style={style.modalCancelButton}
                onPress={(e) => setVisible(false)}
              >
                X
              </Text>
            </Pressable>
            <View>
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
          </View>
        </Modal>
      ) : null}
    </Pressable>
  );
};

const style = StyleSheet.create({
  modalCancelButton: {
    fontWeight: "bold",
    alignSelf: "flex-end",
    fontSize: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  editTextField: {
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 3,
    borderColor: "#d2d6d3",
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});
