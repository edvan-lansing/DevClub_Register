import styled from "styled-components";
import { colors } from "../../../styles/tokens";

export const StyledButton = styled.button`
  border: none;
  border-radius: 2em;
  font-size: 1em;
  font-weight: 600;
  padding: 0.75em 1.5em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  min-width: 0;
  min-height: 2.5em;
  box-sizing: border-box;

  ${({ size }) =>
    size === "small" &&
    `
    font-size: 0.85em;
    padding: 0.5em 1em;
    min-height: 2em;
  `}

  ${({ size }) =>
    size === "large" &&
    `
    font-size: 1.15em;
    padding: 1em 2em;
    min-height: 3em;
  `}

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
    min-height: 2.5em;
  `}

  /** Cor direta via prop */
  ${({ color }) =>
    color &&
    `
    background-color: ${colors[color] || color};
    color: #fff;
    &:hover:not(:disabled) {
      filter: brightness(0.9);
      transform: translateY(-2px);
    }
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
