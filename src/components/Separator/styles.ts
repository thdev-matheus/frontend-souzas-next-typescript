import styled from "styled-components";
import * as T from "./types";

export const Container = styled.section<T.ISeparatorProps>`
  width: ${(props) => props.width};
  min-height: ${(props) => props.height};
`;
