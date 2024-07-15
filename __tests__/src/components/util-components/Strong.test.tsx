// Strong.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import Strong from "@components/util-components/Strong";

describe("Strong", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(<Strong>Test Text</Strong>);

    const textElement = getByText("Test Text");

    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontWeight: "bold",
    });
    expect(textElement.props.numberOfLines).toBe(1);
  });

  it("applies additional styles correctly", () => {
    const additionalStyle = { fontSize: 20 };
    const { getByText } = render(
      <Strong style={additionalStyle}>Test Text</Strong>
    );

    const textElement = getByText("Test Text");

    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      fontWeight: "bold",
    });
    expect(textElement.props.style).toContainEqual(additionalStyle);
  });

  it("renders with correct number of lines", () => {
    const numberOfLines = 2;
    const { getByText } = render(
      <Strong numberOfLines={numberOfLines}>Test Text</Strong>
    );

    const textElement = getByText("Test Text");

    expect(textElement.props.numberOfLines).toBe(numberOfLines);
  });
});
