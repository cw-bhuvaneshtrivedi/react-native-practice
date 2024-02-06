import { fireEvent, render, screen } from "@testing-library/react-native";
import { InfoCard } from "../components/InfoCard";
import { data } from "../components/Mock/Data";

const mock = data[0].versions[0];

describe("Info Card", () => {
  it("should change text of compare option on button click", () => {
    render(<InfoCard ver={mock} border={jest.fn()} />);
    const result = screen.getByTestId("compareOption");
    const before = result.props.children[1].props.children;
    const button = screen.getByTestId("compareOptionButton");
    fireEvent(button, "click");
    const after = result.props.children[1].props.children;

    expect(before).toBe("Add to Compare");
    expect(after).toBe("Remove from Compare");
  });
});

describe("Info Card", () => {
  it("should change text of shortlist option on button click", () => {
    const setSave = jest.fn();
    setSave.mockImplementation((count) => count);
    render(<InfoCard ver={mock} border={setSave} />);

    const result = screen.getByTestId("shortlistOption");
    const before = result.props.children[1].props.children;
    const button = screen.getByTestId("shortlistOptionButton");
    fireEvent(button, "click");
    const after = result.props.children[1].props.children;

    expect(setSave).toHaveBeenCalled();
    expect(setSave).toHaveBeenCalledTimes(1);
    expect(before).toBe("Shortlist");
    expect(after).toBe("Shortlisted");
  });

  it("should match snapshot", () => {
    const result = render(<InfoCard ver={mock} border={jest.fn()} />);
    expect(result).toMatchSnapshot();
  });
});
