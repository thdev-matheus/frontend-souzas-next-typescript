import styled, { css } from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.ISContainerProps>`
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
`;

export const Bubble = styled.div<T.ISBubbleProps>`
  width: fit-content;
  max-width: 85%;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;

  padding: 1rem 1.5rem;

  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.bgSecondary};

  @media (min-width: 481px) {
    max-width: 75%;
  }

  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

export const BoxSystem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0.8rem;

  border-radius: 0.5rem;

  font-size: 9pt;

  background-color: ${(props) => props.theme.bgSecondary};
`;

export const BoxTop = styled.div<T.IBoxTopProps>`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  & > .box_avatar {
    width: 40px;
    min-width: 40px;
    max-width: 40px;
    height: 40px;
    min-height: 40px;
    max-height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    overflow: hidden;

    & > img {
      height: 100%;
    }
  }

  & > .box_content {
    width: 100%;

    & > h4 {
      margin-bottom: 0.2rem;
      color: ${(props) =>
        props.isLoggedUser ? props.theme.primary : props.theme.secondary};
    }
    & > p {
      word-wrap: break-word;
    }
  }
`;

export const BoxBottom = styled.div<T.IBoxBottomProps>`
  width: 100%;

  display: flex;
  justify-content: ${(props) =>
    props.position === "left" ? "flex-end" : "flex-start"};

  font-size: 7pt;

  color: ${(props) => props.theme.txtPrimary}40;
`;
