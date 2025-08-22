import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const StyledInput = styled.input`
  width: 100%;
  max-width: 25em;
  padding: 0.75em 1em;
  border: 2px solid ${({ color }) => colors[color] || color || colors.gray};
  border-radius: 1em;
  font-size: 1em;
  background: ${colors.white};
  color: ${colors.black};
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${({ color }) => colors[color] || color || colors.blue};
    box-shadow: 0 0 0 2px ${({ color }) => colors[color] || color || colors.blue}33;
  }

  &::placeholder {
    color: ${colors.gray};
    opacity: 0.8;
  }
`;
