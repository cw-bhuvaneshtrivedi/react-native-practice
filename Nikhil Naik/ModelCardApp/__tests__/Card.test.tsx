import { fireEvent, render, screen } from "@testing-library/react-native";
import { data } from "../components/Mock/Data";
import { Card } from "../components/Card";

const mock = data[1];

describe("Card", () => {
  it("should", () => {
    render(<Card item={mock} />);
    const result = screen.getAllByText("EMI");
    expect(result[0].children).not.toBeNull();
  });

  it("should change sidebar color", () => {
    render(<Card item={mock} />);
    const sideBar = screen.getByTestId("sideBar");

    const beforeBgColor = sideBar.props.style.backgroundColor;

    const button = screen.getByTestId("shortlistOptionButton");

    fireEvent(button, "click");

    const afterBgColor = sideBar.props.style.backgroundColor;

    fireEvent(button, "click");

    const againBgColor = sideBar.props.style.backgroundColor;

    expect(beforeBgColor).toEqual(againBgColor);
    expect(beforeBgColor).not.toEqual(afterBgColor);
  });
});
