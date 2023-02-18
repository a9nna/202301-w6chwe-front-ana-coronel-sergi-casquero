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
  padding: 30px;
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

`;

export default GlobalStyles;
