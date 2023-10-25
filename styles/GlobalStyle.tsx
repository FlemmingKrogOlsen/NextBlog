"use client"

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
  
  body {
    background-color: rgb(30 41 59);
  }

  a {
    text-decoration: none;
    color: white;
  }



  ul {
    list-style: none;
  }
`;

export default GlobalStyles;