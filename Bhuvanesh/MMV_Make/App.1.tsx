import { StatusBar } from "expo-status-bar";
import Home from "./components/Home";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && <Home />}
      <StatusBar style="auto" />
    </>
  );
}
