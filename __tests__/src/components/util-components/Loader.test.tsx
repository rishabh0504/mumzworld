import React from "react";
import { render } from "@testing-library/react-native";
import LOADER_GIF from "@assets/loader.gif";
import { THEME_COLORS } from "@utils/constant/constant";
import { responsiveHeight } from "@utils/style/responsive";
import Loader from "@components/util-components/Loader";

describe("Loader", () => {
  it("renders correctly when visible is true", () => {
    const { getByTestId, queryByTestId } = render(<Loader visible={true} />);

    const modal = getByTestId("gif-loader-modal");
    const loaderImage = getByTestId("gif-loader-image");

    expect(modal).toBeTruthy();
    expect(loaderImage.props.source).toBe(LOADER_GIF);
    expect(loaderImage.props.style.width).toBe(100);
    expect(loaderImage.props.style.height).toBe(responsiveHeight(100));
  });

  it("does not render when visible is false", () => {
    const { queryByTestId } = render(<Loader visible={false} />);

    const modal = queryByTestId("gif-loader-modal");

    expect(modal).toBeNull();
  });
});
