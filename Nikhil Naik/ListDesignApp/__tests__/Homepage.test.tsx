import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react-native";
import Homepage from "../components/Homepage";
import { apiData } from "../components/Mock/apiData";

describe("Homepage", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => apiData }));
  });
  it("should have visible drawer", async () => {
    const result = render(<Homepage />);
    const btn = screen.getByTestId("homepageButton");
    fireEvent(btn, "click");
    waitFor(() => {
      expect(result).toMatchSnapshot();
    });
  });
  it("should have hiddden drawer", async () => {
    const result = render(<Homepage />);
    expect(result).toMatchSnapshot();
  });
});
