import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  *:focus {
    outline: none;
  }
`;

export default GlobalStyle;
