import styled from "styled-components";

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction === "column" ? "column" : "row"};
  gap: 1em;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  & > button {
    flex: 1 1 0;
    min-width: 0;
  }
`;
