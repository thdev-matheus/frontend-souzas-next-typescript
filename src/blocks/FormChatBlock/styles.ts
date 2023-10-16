import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100%;
    min-height: 10%;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    padding: 1rem 10vw;

    background-color: ${(props) => props.theme.bgTertiary};
  }

  @media (min-width: 1920px) {
  }
`;
