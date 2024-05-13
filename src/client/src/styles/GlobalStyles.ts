import { createGlobalStyle } from 'styled-components';
import '../fonts/fonts.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    width: 100vw;
  }

  *, button, input{
    border: 0;
    background: none;
  }

  html{
    background: var(--background);
  }

  h1, h2, h3, h4{
    font-weight: normal;
  }

  p{
    font-size: 14px;
  }

  :root{
    --background: #FFFFFF;
    --primary: #000328;
    --secondary: #2775F8;

    --grey: #5C5F62;


    --local: #FFF8C2;
    --local_text: #D79100;
    --develop: #FFE6B5;
    --develop_text: #D79100;
    --uat: #BAE7EC;
    --uat_text: #0096A5;
    --waiting_approval: #C9CCED;
    --waiting_approval_text: #000994;
    --production: #B5CE7F;
    --production_text: #496A01;
  }
`;