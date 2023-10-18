import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 3.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 0 1rem;

  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.bgTertiary};

  & > .box_img {
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    overflow: hidden;

    & > img {
      width: 100%;
    }
  }

  & > h4 {
    font-size: 10pt;
  }
`;
