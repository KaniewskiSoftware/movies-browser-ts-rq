import { createGlobalStyle } from "styled-components";

/**
 * GlobalStyle.tsx
 *
 * This file contains the global styles for the application using styled-components.
 * It sets the basic styles for the html and body elements, and applies a box-sizing
 * reset to all elements.
 */

/**
 * GlobalStyle is a styled-components `createGlobalStyle` component that defines
 * the application's global styles.
 *
 * It includes:
 * 1. A box-sizing reset for all elements.
 * 2. A minimum height for the body element.
 * 3. A default margin and font-family for the body element.
 * 4. Dynamic text and background colors based on the current theme.
 */
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
        color: ${({ theme }) => theme.colors.primary};
        background-color: ${({ theme }) => theme.colors.background};
        font-family: 'Poppins', sans-serif;
    }
`;
