import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 0 10vw;

  overflow: hidden auto;

  @media (min-width: 481px) {
    padding: 0 5vw;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }

  @media (min-width: 992px) {
    padding: 0 10vw;
  }
`;

export const BoxLogo = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  @media (min-width: 768px) {
    width: 50%;
    height: 60%;

    border-right: 1px solid white;

    text-align: center;
  }
`;

export const BoxForm = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 50%;
    height: 60%;

    border-left: 1px solid white;
  }
`;
