import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --linen: #fbefe4;
  --marzipan: #f7d49e;
  --silk: #bfaaa3;
  --metallic-bronze: #462c1b;
  --crimson: #e81514;
  --anzac: #e4b056;
  --makara: #8b7d6a;
  --tuscany: #bc532e;

  --white: #FFF;
  
  --gray-50: #F7F8FA;
  --gray-100: #E6E8EB;
  --gray-200: #AFB2B1;
  --gray-500: #808080;
  --gray-800: #242121;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, input, textarea, button {
  font: 500 1rem sans-serif;
  background-color: var(--gray-50);
  color: var(--gray-500);
}

button {
  border: none;
  outline: none;
  &:not(:disabled) {
    cursor: pointer;
  }
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  font-family: sans-serif;
  color: var(--gray-800);
}

a {
  color: inherit;
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--gray-100);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--gray-500);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  filter: brightness(0.8);
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}
`;

export default GlobalStyle;
