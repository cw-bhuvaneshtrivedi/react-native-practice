import { fireEvent, render, screen } from "@testing-library/react-native";
import { data } from "../components/Mock/Data";
import { Card } from "../components/Card";

const mock = data[1];

describe("Card", () => {
  it("should", () => {
    render(<Card item={mock} />);
    const result = screen.getAllByTestId("carName");
    expect(result.length).toBeGreaterThanOrEqual(2);
  });

  it("should change sidebar color", () => {
    render(<Card item={mock} />);
    const sideBar = screen.getByTestId("sideBar");

    const beforeBgColor = sideBar.props.style.backgroundColor;

    const button = screen.getAllByTestId("shortlistOptionButton");

    fireEvent(button[0], "click");

    const afterBgColor = sideBar.props.style.backgroundColor;

    expect(beforeBgColor).not.toEqual(afterBgColor);

    fireEvent(button[1], "click");

    const againBgColor = sideBar.props.style.backgroundColor;

    expect(againBgColor).toEqual(afterBgColor);

    fireEvent(button[0], "click");
    fireEvent(button[1], "click");

    const finalBgColor = sideBar.props.style.backgroundColor;

    expect(beforeBgColor).toEqual(finalBgColor);
  });

  it("should match snapshot", () => {
    const result = render(<Card item={mock} />);
    expect(result).toMatchSnapshot();
  });
});
