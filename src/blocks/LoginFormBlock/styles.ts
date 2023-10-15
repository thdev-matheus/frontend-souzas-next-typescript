import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 19rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    & > h2 {
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const Form = styled.form`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;

    & > span {
      text-align: center;
      font-size: small;
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  height: 2.5rem;
`;
