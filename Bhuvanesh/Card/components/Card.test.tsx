import { fireEvent, render } from "@testing-library/react-native";
import { Card } from "./Card";
import tmp from "../tmp.json";
import { useState } from "react";

const mockSetCount = jest.fn((count) => count + 1);

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: (count: number) => [count, mockSetCount],
// }));

// when(useState).calledWith(0).mockReturnValue()

describe("Testing Card", () => {
  const carData = tmp.models[4];
  it("Get Correct number of versions", () => {
    const { getAllByTestId } = render(<Card carData={carData} />);
    const element = getAllByTestId("versionList");
    // console.log(element.length);
    expect(element).toHaveLength(carData.versions.length);
  });

  it("Shortlist button click", () => {
    const { getByTestId, getAllByTestId } = render(<Card carData={carData} />);
    let button = getAllByTestId("ShortlistBtn");
    // console.log(button);
    fireEvent(button[0], "click");
    button = getAllByTestId("ShortlistBtn");
    fireEvent(button[1], "click");
    const margin = getByTestId("LeftMargin");
    expect(margin.props.style.backgroundColor).toEqual("#00afa0");
    button = getAllByTestId("ShortlistBtn");
    fireEvent(button[1], "click");
    expect(margin.props.style.backgroundColor).toEqual("#00afa0");
    button = getAllByTestId("ShortlistBtn");
    fireEvent(button[0], "click");
    expect(margin.props.style.backgroundColor).toEqual("white");
  });

  // it("Check setCount implementation", () => {
  //   Card({ carData });
  // });
});
