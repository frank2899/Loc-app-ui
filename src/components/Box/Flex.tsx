import styled from "styled-components";
import { flexbox } from "styled-system";
import Box from "./Box";
import { FlexProps } from "./types";

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${({gap}) => gap && `gap : ${gap};`}
  ${flexbox}
`;

export default Flex;
