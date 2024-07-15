import { Dimensions, PixelRatio } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const REFERENCE_WIDTH = 360;
const SCALE_FACTOR = SCREEN_WIDTH / REFERENCE_WIDTH;

export const responsiveFontSize = (size) => {
    const newSize = size * SCALE_FACTOR;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
export const responsiveHeight = (pixels) => {
    const responsiveHeight = PixelRatio.roundToNearestPixel((pixels / SCREEN_HEIGHT) * SCREEN_HEIGHT);
    return responsiveHeight;
};