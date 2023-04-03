import { createGlobalStyle } from 'styled-components';

import 'modern-normalize'; 

export const GlobalStyle = createGlobalStyle`
:root { 
  height: 100%;

  //typography
  --main-font-style: 'Poppins';
  --regular-font-size: 14px;
  --regular-line-height: 1.29;
  --letter-spacing: -0.02em;
}

body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: var(--main-font-style),
    sans-serif;
    font-size: var(--regular-font-size);
    letter-spacing: var(--letter-spacing);
    line-height: var(--regular-line-height);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`;
