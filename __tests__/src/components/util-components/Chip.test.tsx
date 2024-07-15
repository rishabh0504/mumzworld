import React from "react";
import { render } from "@testing-library/react-native";
import Chip from "@components/util-components/Chip"; // Adjust path as per your actual file structure

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
