import { fireEvent, render, waitFor } from "@testing-library/react-native";
import App from "./App";
import data from "./components/data";

describe("App Component", () => {
  it("Not showing Home component", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot("App_1.test.tsx.snap");
  });

  it("should show home component", async () => {
    // jest
    //   .spyOn(window, "fetch")
    //   .mockImplementationOnce(() => Promise.resolve(data));
    global.fetch = jest.fn((url: string) =>
      Promise.resolve({ status: 200, json: () => Promise.resolve(data) })
    ) as jest.Mock;
    const app = render(<App />);
    const button = app.getByTestId("Open");
    await waitFor(() => {
      fireEvent.press(button);
      expect(app).toMatchSnapshot("App_2.test.tsx.snap");
    });
  });
});
