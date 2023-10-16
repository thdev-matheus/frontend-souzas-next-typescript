import styled, { css } from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.ISContainerProps>`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100%;

    display: flex;
    justify-content: ${(props) =>
      props.position === "left"
        ? "flex-start"
        : props.position === "right"
        ? "flex-end"
        : "center"};

    ${(props) =>
      props.notch &&
      props.position === "left" &&
      css`
        .bubble::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          transform: translateX(-70%);
          border-width: 1.5rem 2rem 0.5rem 0;
          border-style: solid;
          border-color: transparent ${(props) => props.theme.bgSecondary}
            transparent transparent;
        }
      `}

    ${(props) =>
      props.notch &&
      props.position === "right" &&
      css`
        .bubble::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          transform: translateX(70%);
          border-width: 1.5rem 0 0.5rem 2rem;
          border-style: solid;
          border-color: transparent transparent transparent
            ${(props) => props.theme.bgSecondary};
        }
      `}
  }

  @media (min-width: 1920px) {
  }
`;

export const Bubble = styled.div<T.ISBubbleProps>`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: fit-content;
    max-width: 60%;

    position: relative;

    padding: 1rem 1.5rem;

    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.bgSecondary};
  }

  @media (min-width: 1920px) {
  }
`;
