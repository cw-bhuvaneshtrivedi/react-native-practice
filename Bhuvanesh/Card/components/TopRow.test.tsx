import { render } from "@testing-library/react-native";
import { TopRow } from "./TopRow";

type TopRowProps = {
  makeName: string;
  modelName: string;
  imageUrl: string;
};
describe("Top Row ", () => {
  const mkName = "Mahindra";
  const mdName = "Thar";
  const imageUrl =
    "https://imgd.aeplcdn.com/310x174/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80";

  it("Is image Visible", () => {
    const { getByTestId } = render(
      <TopRow imageUrl={imageUrl} makeName={mkName} modelName={mdName} />
    );
    const image = getByTestId("image");
    expect(image.props.source.uri).toEqual(imageUrl);
  });

  it("Is MakeName having correct color", () => {
    const { getByTestId } = render(
      <TopRow imageUrl={imageUrl} makeName={mkName} modelName={mdName} />
    );
    const make = getByTestId("mkName");
    expect(make.props.style.color).toEqual("#aaaaaa");
  });

  it("Is Model Visible and has correct text", () => {
    const { getByTestId } = render(
      <TopRow imageUrl={imageUrl} makeName={mkName} modelName={mdName} />
    );
    const model = getByTestId("mdName");
    expect(model.props.children).toEqual("Thar");
  });

  it("should match snapshot", () => {
    const snap = render(
      <TopRow makeName={mkName} modelName={mdName} imageUrl={imageUrl} />
    );
    expect(snap).toMatchSnapshot();
  });
});
