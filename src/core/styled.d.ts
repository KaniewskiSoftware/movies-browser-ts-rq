import "styled-components";

// Common properties for the theme
interface Common {
  breakpoints: {
    readonly smalest: string;
    readonly tiny: string;
    readonly mobile: string;
    readonly medium: string;
    readonly large: string;
    readonly desktop: string;
    readonly mediumDesktop: string;
  };
  readonly boxShadow: string;
}

// Colors properties for the theme
interface Colors {
  readonly primary: string;
  readonly base: string;
  readonly secondary: string;
  readonly disabled: string;
  readonly background: string;
  readonly star: string;
  readonly button: string;
  readonly special: string;
  readonly specialHover: string;
  readonly specialActive: string;
  readonly backdrop: string;
  readonly unknown: string;
}

// Extending the DefaultTheme from styled-components
declare module "styled-components" {
  export interface DefaultTheme extends Common {
    readonly colors: Colors;
  }
}