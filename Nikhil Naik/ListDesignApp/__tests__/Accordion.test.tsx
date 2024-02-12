import Accordion from "../components/Accordion";
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from "@testing-library/react-native";
import { data } from "../components/Mock/data";
import React from "react";

const setClose = jest.fn();
const setView = jest.fn();

describe("Accordion ", () => {
  beforeEach(() => {
    setClose.mockImplementation((open) => {
      return !open;
    });
    setView.mockImplementation((num) => num);
    render(<Accordion data={data[0]} idx={0} setView={setView} view={0} />);
    setClose(false);
  });

  it("should have button", () => {
    const result = screen.getAllByTestId("accordionButton");
    expect(result).toHaveLength(1);
  });

  it("should have responsive button", async () => {
    const button = await screen.findByTestId("accordionButton");
    fireEvent(button, "click");
    expect(setClose).toHaveReturnedWith(true);
    fireEvent(button, "click");
    expect(setClose).toHaveBeenCalledWith(false);
    fireEvent(button, "click");
    expect(setClose).toHaveReturnedWith(true);
    expect(setView).toHaveBeenCalledTimes(2);
  });
});
