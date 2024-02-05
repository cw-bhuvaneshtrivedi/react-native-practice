import { render, fireEvent } from "@testing-library/react-native";
import { ListItem, Price, Specs } from "./ListItem";
import tmp from "../tmp.json";

describe("List Item", () => {
  const version = tmp.models[0].versions[0];

  it("Test Specs Alignment in row", () => {
    const { maxPower, displacement, transmission, fuelType } = version;
    const { getByTestId } = render(
      <Specs
        maxPower={maxPower}
        displacement={displacement}
        transmission={transmission}
        fuelType={fuelType}
      />
    );

    const element = getByTestId("Specs");
    expect(element.props.style[0].flexDirection).toEqual("row");
  });

  it("Test Price", () => {
    const { priceOverview, emi } = version;
    const { getByTestId } = render(
      <Price priceOverview={priceOverview} emi={emi} />
    );
    const element = getByTestId("Price");
    expect(element.type).toEqual("View");
    // expect(element).toMatchSnapshot();
  });

  it("Test ButtonClicks", () => {
    const setCount = jest.fn();
    setCount.mockImplementation();
    const { getByTestId, getByText } = render(
      <ListItem version={version} setCount={setCount} />
    );
    let element = getByTestId("CompareBtn");
    fireEvent(element, "click");
    expect(getByText("Remove from Compare")).not.toBeNull();
  });
});
