import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: {
        blue: string;
        error: string;
      };
      text: {
        dark: string;
      };
      line: {
        grey: string;
      };
    };
  }
}
