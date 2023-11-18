import { createGlobalStyle } from 'styled-components';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "NotoSansKR", sans-serif;
    font-weight: ${theme.fontWeight.normal};
    &::-webkit-scrollbar {
    display: none; 
    }
  }

  html,
  body {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    
    }
    
    button{
      cursor: pointer;
    }
  
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
