import { Dimensions, PixelRatio } from "react-native";

const screenWidth = Dimensions.get('window').width;
const referenceWidth = 360;
const scaleFactor = screenWidth / referenceWidth;

export const responsiveFontSize = (size) => {
    const newSize = size * scaleFactor;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
};