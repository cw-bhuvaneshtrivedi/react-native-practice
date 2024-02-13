import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import App from "../App";

describe("App Component", () => {
  it("renders button initially", () => {
    const { getByText } = render(<App />);
    const buttonElement = getByText("Click Me!");
    expect(buttonElement).toBeTruthy();
  });

  it("opens search page on button click", async () => {
    const { getByText, getByTestId } = render(<App />);
    const buttonElement = getByText("Click Me!");
    fireEvent.press(buttonElement);
    await waitFor(() => {
      expect(getByTestId("search-title")).toBeTruthy();
    });
  });

  it("closes search page on close button click", async () => {
    const { getByText, getByTestId, queryByTestId } = render(<App />);
    fireEvent.press(getByText("Click Me!"));

    await waitFor(() => {
      expect(getByTestId("close-button")).toBeTruthy();
    });
    fireEvent.press(getByTestId("close-button"));
    await waitFor(() => {
      expect(getByText("Click Me!")).toBeTruthy();
    });
  });
});
