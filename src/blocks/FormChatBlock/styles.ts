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

    display: flex;
    justify-content: center;
    align-items: flex-end;

    padding: 1rem 2rem;

    background-color: ${(props) => props.theme.bgTertiary};

    & > .input {
      padding: 0 1rem;

      border: 1px solid ${(props) => props.theme.borderPrimary};
      border-radius: 0.5rem;

      background-color: transparent;

      & > textarea {
        color: ${(props) => props.theme.txtPrimary};
        background-color: transparent;
      }

      & > div {
        cursor: pointer;
        & > svg {
          font-size: 18pt;
        }
      }
    }
  }

  @media (min-width: 1920px) {
  }
`;
