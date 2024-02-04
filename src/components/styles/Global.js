import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  background-color: ${({ theme }) => theme.colours.offWhite};
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  font-size: 2rem;
  font-style: italic;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  
  @media (min-width: ${({ theme }) => theme.mobile}) {
        font-size: 3rem;
        
    }
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

`;

export default GlobalStyles;
