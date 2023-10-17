import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 10%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 1rem 10vw;

  background-color: ${(props) => props.theme.bgTertiary};
`;
