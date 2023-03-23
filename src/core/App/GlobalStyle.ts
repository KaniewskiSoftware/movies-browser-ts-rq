import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,::after,::before {
        box-sizing: inherit;
    }

    body {
        min-height: 100vh;
        margin: 0;
        color: ${({ theme }) => theme.colors.site.primaryText};
        background-color: ${({ theme }) => theme.colors.site.background};
        font-family: 'Poppins', sans-serif;
    }
`;
