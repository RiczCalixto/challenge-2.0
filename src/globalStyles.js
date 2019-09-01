import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    html, body, #pokeApp {
      height: 100%;
    }

    body{
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      background: #353535;
      color: #FFFF;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

export default GlobalStyles;
