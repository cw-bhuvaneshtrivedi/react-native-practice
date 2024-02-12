import { fireEvent, render } from "@testing-library/react-native";
import Accordion from "./Accordion";
import React, { useState } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("Accordion Tests", () => {
  const setOpen = jest.fn((open: boolean) => !open);
  const setView = jest.fn((index: number) => index);
  //   let open = jest.;
  const data = {
    makeName: "BMW",
    version: [
      "X1",
      "7 Series",
      "2 Series Gran Coupe",
      "X7",
      "3 Series Gran Limousine",
      "Z4",
      "M4 Competition",
      "M340i",
      "M8",
      "6 Series GT",
      "X5",
      "XM",
      "M2",
      "X3",
      "X4 M40i",
      "i7",
      "i4",
      "iX1",
      "X3 M40i",
      "X5 M",
      "iX",
    ],
  };
  beforeEach(() => {
    useState.mockImplementation((open: boolean) => [open, setOpen]);
    setOpen.mockImplementation((open) => !open);
    // useState.mockImplementation((height: number) => [height, setHeight]);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  it("check animated component", () => {
    const { getByTestId } = render(
      <Accordion
        makeName={data.makeName}
        version={data.version}
        view={0}
        setView={setView}
      />
    );
    expect(getByTestId("drawer")).not.toBeNull();
  });

  it("Check button onclick function", () => {
    const { getByTestId } = render(
      <Accordion
        makeName={data.makeName}
        version={data.version}
        setView={setView}
      />
    );
    let element = getByTestId("drawer");
    fireEvent.press(element);
    expect(setOpen).toHaveBeenCalled();
  });

  it("Check state change", () => {
    const { getByTestId } = render(
      <Accordion
        makeName={data.makeName}
        version={data.version}
        setView={setView}
      />
    );
    setOpen.mockClear();
    setOpen(false);
    let element = getByTestId("drawer");
    fireEvent(element, "click");
    expect(setOpen).toHaveBeenCalledTimes(2);
    expect(setOpen).toHaveReturnedWith(true);
    fireEvent(element, "click");
    expect(setOpen).toHaveBeenCalledTimes(3);
    expect(setOpen).toHaveReturnedWith(false);
  });

  /*it("Check animated height change", () => {
    useState.mockImplementation((height: number) => [height, setHeight]);
    setHeight(10);
    const { getByTestId } = render(
      <AccordionAnimated name="afdfda" open={false} data={data[0]} />
    );
    let element = getByTestId("AnimatedH");
    // console.log(element.props.style);
    console.log(element.props.animatedStyle);
    // let drawer = getByTestId("drawer");
    // fireEvent.press(drawer, {
    //   nativeEvent: { layout: { height: 300 } },
    // });
    setOpen(true);
    jest.runAllTimers();
    jest.advanceTimersByTime(300);
    console.log(element.props.animatedStyle);
    expect(setHeight).toHaveBeenCalledWith(2);
    expect(element).toHaveAnimatedStyle({ height: 0 });
    expect(element.props.style.height).toEqual(0);
  });*/
});
