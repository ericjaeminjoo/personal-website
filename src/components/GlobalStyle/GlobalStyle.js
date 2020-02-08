import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *:before,
    *:after {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
    }
    html {
        font-size: 62.5%;
    }
    html,
    body {
        box-sizing: border-box;
        font-family: 'Manrope-ExtraLight', sans-serif;
        font-weight: 200;
        line-height: 1.4;
        color: #2e3151;
        text-decoration: none;
        width: 100%;
        background-color: #ddefff;
        position: absolute;
        z-index: 100;
    }
    strong {
        font-family: 'Manrope-ExtraBold', sans-serif;
        font-weight: 800;
        color: #35385d;
    }
    p {
        margin-bottom: 30px;
    }
`;

export default GlobalStyle;
