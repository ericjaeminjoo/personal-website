import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
    }
    body {
        color: #000;
        font-family: 'Manrope-ExtraLight', sans-serif;
        font-weight: 200;
        font-size:
        line-height: 1.4;
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;
