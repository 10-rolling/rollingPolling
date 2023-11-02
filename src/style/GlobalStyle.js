import { createGlobalStyle } from 'styled-components';
import Pretendard from './fonts/Pretendard-Regular.woff';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  @font-face {
    font-family: "Pretendard";
    src: url(${Pretendard}) format('woff');
    font-style: normal;
  }
`;

export default GlobalStyle;
