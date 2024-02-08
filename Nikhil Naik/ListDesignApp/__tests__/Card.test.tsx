import { render, screen } from "@testing-library/react-native";
import Card from "../components/Card";

const data = "Maruti Suzuki";

describe("Card", () => {
  it("should have once rendered the name", () => {
    render(<Card data={data} />);
    const result = screen.getAllByText(data);
    expect(result).toHaveLength(1);
  });
});
