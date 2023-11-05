import NotoSansKR from 'assets/fonts/NotoSansKR-Regular.woff';
import { createGlobalStyle } from 'styled-components';

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
    font-family: "NotoSansKR";
  }

  html {
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
