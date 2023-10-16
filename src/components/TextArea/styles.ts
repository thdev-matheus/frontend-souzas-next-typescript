import styled from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.ISTextareaProps>`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100%;
    min-height: 70%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem 2rem;

    border-radius: 2rem;
    border: 1px solid ${(props) => props.theme.borderPrimary};

    & > textarea {
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      resize: none;

      font-size: 14pt;

      color: ${(props) => props.theme.txtPrimary};
      background-color: transparent;
    }

    & > svg {
      font-size: ${(props) => props.theme.iconSize || "2rem"};
    }
  }

  @media (min-width: 1920px) {
  }
`;
