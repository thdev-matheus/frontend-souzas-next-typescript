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
    height: 90%;

    display: flex;
    flex-direction: column-reverse;

    padding: 1rem;

    & > .msg_box {
      color: ${(props) => props.theme.txtSecondary};
    }
  }

  @media (min-width: 1920px) {
  }
`;
