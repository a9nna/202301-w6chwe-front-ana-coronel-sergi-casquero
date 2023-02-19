import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto";

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  color: #fff;
  margin: 0;
  font-family: roboto, sans serif;
  background-color: #232636;
  min-height:100vh;
}

ul,
ol,
li {
  margin: 0;
  padding: 0;
  list-style: none; 
}

h1, h2, h3 {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 200;
}

`;

export default GlobalStyles;
