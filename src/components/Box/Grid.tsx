import styled from "styled-components";
import { grid, flexbox } from "styled-system";
import Box from "./Box";
import { GridProps } from "./types";

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${({gap}) => gap && `gap : ${gap};`}
  ${flexbox}
  ${grid}
`;

export default Grid;
