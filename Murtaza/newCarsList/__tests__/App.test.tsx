import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Card } from "../src/components/Card";
import { ItemCard } from "../src/components/ItemCard";
import { data } from "../src/data/Data";

describe("App Components", () => {
  test("Card component renders correctly", () => {
    const item = data[0];
    const { getByTestId, getByText } = render(<Card item={item} />);
    expect(getByTestId("carImage")).toBeTruthy();
    expect(getByText(item.makeName)).toBeTruthy();
    expect(getByText(item.modelName)).toBeTruthy();
    expect(getByTestId("sideLine")).toBeTruthy();
  });

  test("ItemCard component renders correctly", () => {
    const variations = data[0].versions[0];
    const { getByTestId, getByText } = render(
      <ItemCard variations={variations} />
    );
    expect(getByText(variations.name)).toBeTruthy();
    expect(getByTestId("shortlistOption")).toBeTruthy();
    expect(getByTestId("compareOption")).toBeTruthy();
  });

  test("ItemCard component interactions work correctly", () => {
    const variations = data[0].versions[0];
    const selectMock = jest.fn();
    const { getByTestId, getByText } = render(
      <ItemCard variations={variations} select={selectMock} />
    );
    const shortlistButton = getByTestId("shortlistOptionButton");
    fireEvent.press(shortlistButton);
    expect(selectMock).toHaveBeenCalledTimes(1);
    expect(shortlistButton).toBeTruthy();
    const shortlistText = getByText("Shortlisted");
    expect(shortlistText).toBeTruthy();

    fireEvent.press(getByTestId("compareOptionButton"));
    expect(selectMock).toHaveBeenCalledTimes(2);
    const compareClickText = getByText("Remove from Compare");
    expect(compareClickText).toBeTruthy();
  });
});
