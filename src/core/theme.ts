/**
 * This file contains the theme configuration for the application, including colors,
 * breakpoints, and other common styling properties.
 */

// Common properties for the theme
const common = {
  breakpoints: {
    smalest: "324px",
    tiny: "467px",
    mobile: "767px",
    medium: "991px",
    large: "1081px",
    desktop: "1224px",
    mediumDesktop: "1440px",
  },
  boxShadow: "0px 4px 12px rgba(186, 199, 213, 0.5)",
};

// Color names and their corresponding values
const colorNames = {
  white: "#FFFFFF",
  whisper: "#F5F5FA",
  mystic: "#E4E6F0",
  waterloo: "#7E839A", //silver
  yellow: "#FCD420",
  lightBlue: "#D6E4FF",
  dodgerBlue: "#3377FF",
  blueRibbon: "#0055FF",
  blue: "#0044CC", //scienceBlue
  woodSmoke: "#18181B", //woodSmoke
};
/**
 * The theme object contains the styling configuration for the application.
 * It includes:
 * 1. Common properties: breakpoints and boxShadow.
 * 2. Colors for the application.
 */
export const theme = {
  ...common,
  colors: {
    primary: colorNames.woodSmoke,
    base: colorNames.white,
    secondary: colorNames.waterloo,
    disabled: colorNames.mystic,
    background: colorNames.whisper,
    star: colorNames.yellow,
    button: colorNames.lightBlue,
    special: colorNames.blue,
    specialHover: colorNames.dodgerBlue,
    specialActive: colorNames.blueRibbon,
  },
};

/**states: {
      buttonBackground: colorNames.scienceBlue,
      buttonText: colorNames.white,
      buttonHover: colorNames.blueRibbon,
      buttonActive: colorNames.dodgerBlue,
    }, */
