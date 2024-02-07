import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import { useState } from "react";
import { Button } from "react-native";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && <Home setOpen={setIsOpen} />}
      <Button />
      <StatusBar style="auto" />
    </>
  );
}
