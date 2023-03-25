/**
 * theme.ts
 *
 * This file contains the theme configuration for the application, including colors,
 * breakpoints, and other common styling properties.
 */

// Color names and their corresponding values
const colorNames = {
  white: "#FFFFFF",
  whisper: "#F5F5FA",
  mystic: "#E4E6F0",
  silver: "#C4C4C4",
  waterloo: "#7E839A",
  dodgerBlue: "hsl(220, 100%, 60%)",
  blueRibbon: "hsl(220, 100%, 50%)",
  scienceBlue: "#0044CC",
  woodSmoke: "#18181B",
  stormGray: "#74788B",
  black: "#000000",
  lightBlue: "#D6E4FF",
};

// Common properties for the theme
const common = {
  breakpoints: {
    smalest: "324px",
    tiny: "467px",
    small: "524px",
    mobile: "767px",
    medium: "991px",
    large: "1081px",
    desktop: "1224px",
    mediumDesktop: "1440px",
  },
  boxShadow: "0px 4px 12px rgba(186, 199, 213, 0.5)",
};

/**
 * The theme object contains the styling configuration for the application.
 * It includes:
 * 1. Common properties: breakpoints and boxShadow.
 * 2. Colors for different parts of the application, including site, header, tile, states,
 *    backdrop, detailsTile, credits, and footer.
 */
export const theme = {
  ...common,
  colors: {
    site: {
      primaryText: colorNames.woodSmoke,
      background: colorNames.whisper,
    },
    header: {
      primary: colorNames.white,
      background: colorNames.woodSmoke,
      inputBorder: colorNames.mystic,
      placeholder: colorNames.waterloo,
    },
    tile: {
      secondaryText: colorNames.waterloo,
      background: colorNames.white,
      tagBackground: colorNames.mystic,
      imageBackground: colorNames.silver,
    },
    states: {
      buttonBackground: colorNames.scienceBlue,
      buttonText: colorNames.white,
      buttonHover: colorNames.blueRibbon,
      buttonActive: colorNames.dodgerBlue,
    },
    backdrop: {
      background: colorNames.black,
      text: colorNames.white,
    },
    detailsTile: {
      background: colorNames.white,
      primaryText: colorNames.black,
      secondaryText: colorNames.stormGray,
      backgroundImage: colorNames.silver,
    },
    credits: {
      fullName: colorNames.woodSmoke,
      role: colorNames.waterloo,
    },
    footer: {
      background: colorNames.lightBlue,
      disabled: colorNames.mystic,
      arrow: colorNames.scienceBlue,
      disabledArrow: colorNames.waterloo,
      text: colorNames.black,
      counter: colorNames.waterloo,
    },
  },
};
