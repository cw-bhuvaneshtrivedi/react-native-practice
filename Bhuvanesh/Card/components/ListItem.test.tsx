import { render } from "@testing-library/react-native";
import { ListItem } from "./ListItem";
import tmp from "../tmp.json";

describe("List Item", () => {
  const version = tmp.models[0].versions[0];
  it("Test specs", () => {});
  it("Test this", () => {
    render(
      <ListItem
        version={version}
        setCount={function (fn: (count: number) => number): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });
});
