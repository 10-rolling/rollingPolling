import NotoSansKR from 'assets/fonts/NotoSansKR-Regular.woff';
import { createGlobalStyle } from 'styled-components';
import theme from 'styles/theme';

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
    font-weight: ${theme.fontWeight.normal};
  }

  html,
  body {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    }
    
    button{
      cursor: pointer;
    }
`;

export default GlobalStyle;
