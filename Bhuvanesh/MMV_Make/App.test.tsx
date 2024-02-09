import { fireEvent, render } from "@testing-library/react-native";
import App from "./App";

describe("App Component", () => {
  it("Not showing Home component", () => {
    jest.unmock("react");
    const app = render(<App />);
    expect(app).toMatchSnapshot("App_1.test.tsx.snap");
  });

  it("should show home component", () => {
    jest.unmock("react");
    const app = render(<App />);
    const button = app.getByTestId("Open");
    fireEvent.press(button);
    expect(app).toMatchSnapshot("App_2.test.tsx.snap");
  });
});
