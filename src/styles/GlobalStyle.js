import { createGlobalStyle } from 'styled-components';
import NotoSansKR from 'assets/fonts/NotoSansKR-Regular.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NotoSansKR";
    src: url(${NotoSansKR}) format('woff');
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
