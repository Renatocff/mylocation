import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body, input, button, textarea, select {
    font: 16px Poppins, sans-serif;
  }

  /* button {
    cursor: pointer;
    border: none;
    background: transparent;
  } */

  img {
    max-width: 100%;
    height: auto;
  }
`;
