import { createGlobalStyle } from "styled-components";
import SUITVariable from "./assets/SUIT-Variable.ttf";
import BreeSerifRegular from "./assets/BreeSerif-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face { 
  font-family: "SUIT Variable";
  src: url(${SUITVariable}) format("truetype");
}
@font-face {
  font-family: "BreeSerif Regular";
  src: url(${BreeSerifRegular}) format("truetype");
}
  *, *::before, *::after {
    font-family: "SUIT Variable";

  }

  body {
    font-family: "SUIT Variable";

  }
`;

export default GlobalStyle;
