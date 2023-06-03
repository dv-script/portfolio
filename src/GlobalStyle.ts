import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: min-content;
  }

  body {
    box-sizing: border-box;
    font-family: "Montserrat";
  }

  button {
    font-family: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }
`
