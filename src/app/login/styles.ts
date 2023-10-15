import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 10vw;
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxLogo = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 50%;
    height: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-right: 1px solid white;

    text-align: center;

    & > h1 {
      font-size: 40pt;
    }

    & > h2 {
      font-size: 20pt;
      font-weight: lighter;

      color: ${(props) => props.theme.secondary};
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxForm = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 50%;
    height: 60%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-left: 1px solid white;
  }

  @media (min-width: 1920px) {
  }
`;
