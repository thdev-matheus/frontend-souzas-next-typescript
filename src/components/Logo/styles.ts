import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  & > h1 {
    font-size: 40pt;
  }

  & > h2 {
    font-size: 20pt;
    font-weight: lighter;

    color: ${(props) => props.theme.secondary};
  }
  @media (min-width: 481px) {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    & > h1 {
      font-size: 40pt;
    }

    & > h2 {
      font-size: 20pt;
      font-weight: lighter;

      color: ${(props) => props.theme.secondary};
    }
  }
`;
