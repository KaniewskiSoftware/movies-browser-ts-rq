/**
 * styled.d.ts
 *
 * This file contains type definitions for the styled-components DefaultTheme.
 * It extends the DefaultTheme interface to include custom properties for the
 * application's theme, such as colors and breakpoints.
 */
import "styled-components";

/** Common properties for the theme for @example: breakpoints */
interface Common {
  breakpoints: {
    readonly [index: string]: string;
  };
  readonly boxShadow: string;
}

// Color properties for each color category
interface Color {
  readonly [index: string]: string;
}

// Colors properties for the theme
interface Colors {
  readonly [index: string]: Color;
}

// Extending the DefaultTheme from styled-components
declare module "styled-components" {
  export interface DefaultTheme extends Common {
    readonly colors: Colors;
  }
}
