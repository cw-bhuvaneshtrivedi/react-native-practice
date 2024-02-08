import { fireEvent, render, screen } from "@testing-library/react-native";
import Homepage from "../components/Homepage";

describe("Homepage", () => {
  it("should have visible drawer", () => {
    const result = render(<Homepage />);
    const btn = screen.getByTestId("homepageButton");

    fireEvent(btn, "click");
    expect(result).toMatchSnapshot();
  });
  it("should have hiddden drawer", () => {
    const result = render(<Homepage />);
    expect(result).toMatchSnapshot();
  });
});
