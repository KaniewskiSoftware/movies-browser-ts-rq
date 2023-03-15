import "styled-components";

interface Common {
  breakpoints: {
    readonly [index: string]: string;
  };
  readonly boxShadow: string;
}

interface Color {
  readonly [index: string]: string;
}

interface Colors {
  readonly [index: string]: Color ;
}

declare module "styled-components" {
  export interface DefaultTheme extends Common {
    readonly colors: Colors;
  }
}
