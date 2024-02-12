import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react-native";
import BottomDrawer from "../components/BottomDrawer";
import { apiData } from "../components/Mock/apiData";
require("react-native-reanimated").setUpTests();

describe("bottom drawer", () => {
  beforeEach(async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => apiData }));
  });

  it("should animate", async () => {
    const result = waitFor(() => render(<BottomDrawer open={true} />)).then(
      (res) => {
        jest.useFakeTimers();
        const accordion = screen.getAllByTestId("accordion");
        expect(res).toMatchSnapshot();
        expect(accordion).toHaveLength(2);
        const accordionCard = screen.getAllByTestId("card");
        const accordionBtn = screen.getAllByTestId("accordionButton");
        expect(accordionCard).toHaveLength(2);
        console.log(accordionCard[0].props.style);
        jest.runAllTimers();
        waitFor(() => {
          fireEvent(accordionBtn[0], "click");
        });
        jest.advanceTimersByTime(500);
        // const accordionCardAfter = screen.getAllByTestId("card");
        // console.log(accordionCardAfter[0].props.style);
        // getDefaultStyle(accordionCardAfter[0]);
      }
    );
  });
});
