import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    position: absolute;
    top: 1rem;
    left: 1rem;

    z-index: 9990;

    & > svg {
      width: 30px;
      height: 30px;

      cursor: pointer;

      color: ${(props) => props.theme.primary};
    }
  }

  @media (min-width: 1920px) {
  }
`;

export const DeadBox = styled.div`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 100vw;
    height: 100vh;

    position: absolute;
    z-index: 9991;

    background-color: ${(props) => props.theme.bgTertiaryAlpha};
  }

  @media (min-width: 1920px) {
  }
`;

export const BoxInfo = styled(motion.section)`
  @media (min-width: 481px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    width: 16rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    position: absolute;
    z-index: 9992;

    top: 1rem;
    left: 1rem;

    padding: 1rem 0.5rem;

    border-radius: 0.5rem;

    text-align: center;

    background-color: ${(props) => props.theme.bgSecondary};

    & > .header {
      width: 100%;

      display: flex;
      justify-content: space-between;

      padding: 0 1rem;
      margin-bottom: 1rem;

      & > h3 {
        font-size: 12pt;
      }

      & > svg {
        width: 20px;
        height: 20px;

        color: ${(props) => props.theme.txtPrimary};
      }
    }
  }

  @media (min-width: 1920px) {
  }
`;
