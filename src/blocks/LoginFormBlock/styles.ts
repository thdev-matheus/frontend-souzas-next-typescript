import styled from "styled-components";

export const Container = styled.section`
  width: 19rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const Form = styled.form`
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
`;

export const BoxButton = styled.div`
  width: 100%;
  height: 2.5rem;
`;
