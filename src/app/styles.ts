import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 4rem 0;
  @media (min-width: 481px) {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 4rem 0;
  }
`;

export const BoxLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  @media (min-width: 481px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    text-align: center;
  }
`;

export const BoxButton = styled.div`
  width: 12rem;
  height: 2.5rem;
  @media (min-width: 481px) {
    width: 12rem;
    height: 2.5rem;
  }
`;
