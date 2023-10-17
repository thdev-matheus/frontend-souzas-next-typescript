import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    box-shadow: 0 0 0 0;

    border: none;
    outline: none;
    
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  body {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    overflow: hidden auto;

    
    color: ${(props) => props.theme.txtPrimary};
    background-color: ${(props) => props.theme.bgPrimary};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.txtPrimary};
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes shake {
    15%,
    19%,
    23%,
    27%,
    31% {
      transform: rotate(-15deg);
    }

    17%,
    21%,
    25%,
    29% {
      transform: rotate(15deg);
    }

    33% {
      transform: rotate(0);
    }

    to {
      transform: rotate(0);
    }
  }

  @keyframes fadeinout {
    from {
      opacity: 0.5;
      scale: 1;
    }
    
    50% {
      opacity: 1;
      scale: 1.05;
    }
    
    to {
      opacity: 0.5;
      scale: 1;
    }
  }
`;
