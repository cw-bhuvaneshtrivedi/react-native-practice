import Accordion from "../components/Accordion";
import {
  fireEvent,
  render,
  screen,
  userEvent,
} from "@testing-library/react-native";
import { data } from "../components/Mock/data";
import { useState } from "react";
import AccordionAnimation from "../components/AccordionAnimation";
import React from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const setClose = jest.fn();

describe("Accordion ", () => {
  beforeEach(() => {
    useState.mockImplementation((val: boolean) => [false, setClose]);
    setClose.mockImplementation((close: boolean) => !close);

    close = setClose(false);
  });

  it("should have button", () => {
    render(<Accordion data={data[0]} />);
    const result = screen.getAllByTestId("accordionButton");
    expect(result).toHaveLength(1);
  });

  it("should have responsive button", async () => {
    render(<Accordion data={data[0]} />);
    const button = await screen.findByTestId("accordionButton");
    fireEvent(button, "click");
    expect(setClose).toHaveReturnedWith(true);
    fireEvent(button, "click");
    expect(setClose).toHaveReturnedWith(false);
    fireEvent(button, "click");
    expect(setClose).toHaveReturnedWith(true);
  });
});
