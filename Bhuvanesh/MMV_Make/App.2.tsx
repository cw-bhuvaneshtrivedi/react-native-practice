import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <Home setOpen={setIsOpen} />
      ) : (
        <TouchableOpacity style={styles.container} onPress={handleAnimation}>
          <Text>BUY NEW CAR</Text>
        </TouchableOpacity>
      )}
      <StatusBar style="auto" />
    </>
  );
}
