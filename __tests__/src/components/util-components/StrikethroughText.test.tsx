// StrikethroughText.test.tsx
import React from "react";
import { render } from "@testing-library/react-native";
import { THEME_COLORS } from "@utils/constant/constant";
import StrikethroughText from "@components/util-components/StrikethroughText";

describe("StrikethroughText", () => {
  it("renders correctly with default styles", () => {
    const { getByText } = render(
      <StrikethroughText>Test Text</StrikethroughText>
    );

    const textElement = getByText("Test Text");

    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      textDecorationLine: "line-through",
      color: THEME_COLORS["semantic.fg.disabled"],
    });
  });

  it("applies additional styles correctly", () => {
    const additionalStyle = { fontSize: 20 };
    const { getByText } = render(
      <StrikethroughText style={additionalStyle}>Test Text</StrikethroughText>
    );

    const textElement = getByText("Test Text");

    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toContainEqual({
      textDecorationLine: "line-through",
      color: THEME_COLORS["semantic.fg.disabled"],
    });
    expect(textElement.props.style).toContainEqual(additionalStyle);
  });
});
