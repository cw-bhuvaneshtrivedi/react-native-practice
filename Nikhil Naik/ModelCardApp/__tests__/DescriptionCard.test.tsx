import { render, screen } from "@testing-library/react-native";
import { DescriptionCard } from "../components/DescriptionCard";

const setUp = () => {
  render(
    <DescriptionCard
      img={
        "https://imgd.aeplcdn.com/600x337/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-3.jpeg?isig=0"
      }
      maker={"Mahindra"}
      model={"Thar"}
    />
  );
};

describe("Description Block", () => {
  it("should have a maker Name", () => {
    setUp();
    const title = screen.getByTestId("makerName");
    expect(title).not.toBeNull();
    expect(title.props.children).toEqual("Mahindra");
  });

  it("should have a model Name", () => {
    setUp();
    const result = screen.getByTestId("modelName");
    expect(result.props.children).toBe("Thar");
  });

  it("should have a image", () => {
    setUp();
    const result = screen.getByTestId("carImage");
    expect(result.props.source.uri).toBe(
      "https://imgd.aeplcdn.com/600x337/n/cw/ec/126463/s-presso-exterior-right-front-three-quarter-3.jpeg?isig=0"
    );
  });
});
