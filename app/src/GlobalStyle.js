import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${({ theme }) => theme.mainBackgroundColor};
        color: ${({ theme }) => theme.mainTextColor};
    }
`;

export const darkTheme = {
    mainBackgroundColor: "#232527",
    asideBackgroundColor: "#1f2123",
    mainTextColor: "white",
    // placeholderColor: "#ffffff4d",
}

export const lightTheme = {
    mainBackgroundColor: "#f6f6f6",
    asideBackgroundColor: "#e2e2e2",
    mainTextColor: "black",
    // placeholderColor: "#ffffff4d",
}