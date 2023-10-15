import styled from "styled-components";

export const Container = styled.section`
  @media (min-width: 320px) {
    width: 100vw;
    height: 100vh;

    display: flex;

    position: fixed;
    top: 0;
    z-index: 9999;

    background-color: ${(props) => props.theme.blackAlpha};

    & > section {
      width: 60%;
      height: 100%;
    }
  }
`;

export const BoxSurface = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 3rem 2rem 5rem;

    border-radius: 0 2rem 25rem 0;

    box-shadow: -1px 6px 10px 0px ${(props) => props.theme.bgSecondary};

    background-color: ${(props) => props.theme.bgPrimary};
  }
`;

export const BoxSettings = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: 2rem;

    display: flex;
    justify-content: space-between;

    & > .settings {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    & > .close_drawer {
      width: 2rem;
      height: 2rem;

      color: ${(props) => props.theme.textPrimary};

      cursor: pointer;

      transition: 0.8s;

      :hover {
        color: ${(props) => props.theme.primary};

        transition: 0.8s;
      }
    }
  }
`;

export const BoxChildren = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    height: 90%;

    overflow: hidden auto;
  }
`;

export const DeadArea = styled.div`
  @media (min-width: 320px) {
    width: 30%;
    height: 100%;
  }
`;
