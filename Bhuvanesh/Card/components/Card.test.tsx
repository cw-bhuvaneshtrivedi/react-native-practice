import { fireEvent, render } from "@testing-library/react-native";
import { Card } from "./Card";
import tmp from "../tmp.json";

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
    expect(element.length).toBeGreaterThanOrEqual(2);
  });

  it("Shortlist button click", () => {
    const { getByTestId, getAllByTestId } = render(<Card carData={carData} />);
    let button = getAllByTestId("ShortlistBtn");
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

  it("Should match snapshot", () => {
    const snap = render(<Card carData={carData} />);
    expect(snap).toMatchSnapshot();
  });
});
