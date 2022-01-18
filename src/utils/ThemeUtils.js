import React from 'react';
import {PixelRatio, Platform, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;

const myWidth = Dimensions.get('window').width;
const myHeight = Dimensions.get('window').height;

const relativeWidth = num => (myWidth * num) / 100;
const relativeHeight = num => (myHeight * num) / 100;

const dpi = PixelRatio.get();

export const getDpiFontSizeFromPx = (pixcelSize) => {
    let fontSizeDpi = pixcelSize / dpi;
    return PixelRatio.getPixelSizeForLayoutSize(fontSizeDpi);
}

const isTablet = () => {
    let pixelDensity = PixelRatio.get();
    let adjustedWidth = width * pixelDensity;
    let adjustedHeight = height * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
};

const responsiveFontSize = (fontSize) => {
    let divider = isTablet() ? 600 : 375;
    return Math.round(fontSize * realWidth / divider);
};



const responsiveHeight = (height) => {
    if (!isTablet())
        return height;
    else
        return (height + (height * 0.25));
};


export default {
      responsiveHeight,
    relativeWidth, relativeHeight,responsiveFontSize
};