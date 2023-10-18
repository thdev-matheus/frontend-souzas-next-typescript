import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  position: absolute;
  top: 1rem;
  left: 1rem;

  z-index: 9990;

  & > svg {
    width: 20px;
    height: 20px;

    cursor: pointer;

    color: ${(props) => props.theme.primary};
  }

  @media (min-width: 481px) {
    & > svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (min-width: 768px) {
    & > svg {
      width: 30px;
      height: 30px;
    }
  }
`;

export const DeadBox = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 9991;

  background-color: ${(props) => props.theme.bgTertiaryAlpha};
`;

export const BoxInfo = styled(motion.section)`
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
`;
