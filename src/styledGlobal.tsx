import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #ffffff;
        --white200: #F3F5F7; 
        --gray: #717171;
        --grayText: #b6b6b6;
        --blackText: #313131;
        --grayDark: #1A202C;
        --purple: #574AE8;
        --grayTransparent: rgba(255, 255, 255, 0.2);
        --gradientDefault: linear-gradient(270deg, #3EA1DB 0%, #574AE8 100%);
        --fontLexendDeca: 'Lexend Deca', sans-serif;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--fontLexendDeca);
        background-color: var(--white200);
    }
`;