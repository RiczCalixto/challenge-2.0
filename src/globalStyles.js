import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    body{
      text-rendering: optimizeLegibility !important;
      -webkit-font-smoothing: antialiased !important;
      background: #353535;
      color: #FFFF;
      font-family: Arial, Helvetica, sans-serif;
    }
    #pokeApp{
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export default GlobalStyles;
