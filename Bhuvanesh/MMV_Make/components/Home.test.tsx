import { act, fireEvent, render, waitFor } from "@testing-library/react-native";
import Home from "./Home";
import data from "./data";

describe("Home Component", () => {
  global.fetch = jest.fn((url: string) =>
    Promise.resolve({ status: 200, json: () => Promise.resolve(data) })
  ) as jest.Mock;
  jest.useFakeTimers();
  // it("Check one open in accordion", async () => {
  //   const setOpen = jest.fn();
  //   setOpen.mockImplementation(() => true);
  //   const { getByTestId, getAllByTestId } = render(<Home setOpen={setOpen} />);
  //   await waitFor(() => {
  //     let element = getAllByTestId("drawer");
  //     let aniHeight = getAllByTestId("AnimatedH");
  //     fireEvent.press(element[0]);
  //     fireEvent.press(element[1]);
  //     // act(() => jest.advanceTimersByTime(10000));
  //     jest.advanceTimersByTime(10000);
  //     expect(aniHeight[0]).toHaveAnimatedStyle({ height: 50 });
  //   });
  // });
});
