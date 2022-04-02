import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --primarysand: #DEBD9A;
    --primaryblue: #073044;
    --primarygreen: #f2b749;
    --primaryorange: #bf7c41;
    --primarybrown: #590902;
    --secondaryblue: #7AA4B2;
    --secondarygreen: #6DA99F;
    --secondarypeach: #E8C9C2;
    --secondarypink: #F5EFE9;
    --textwhite: #FFFFFF;
    --textblack: #011B28;
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
  }

  h1, h2 {
    font-family: 'Barlow Condensed', sans-serif;
  }

  h1, h3{
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