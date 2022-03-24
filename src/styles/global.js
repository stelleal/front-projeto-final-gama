import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #f2f2f2;
    --black: #393740;
    --yellow: #f2b749;
    --light-brown: #bf7c41;
    --dark-brown: #590902;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 1rem = 15px
    }

    @media (max-width: 780px) {
      font-size: 87.5%; // 1rem = 14px
    }
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2 {
    font-family: 'Raleway', sans-serif;
  }

  h1, h2, h3, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;