import React from "react";
import { render } from "@testing-library/react-native";
import Chip from "@components/util-components/Chip";

describe("Chip component", () => {
  it("renders correctly", () => {
    const chipProps = {
      label: "Test Chip",
      bgColor: "blue",
      textColor: "white",
    };

    const { getByText } = render(<Chip {...chipProps} />);
    const chipLabel = getByText("Test Chip");
    expect(chipLabel).toBeDefined();
  });
});
