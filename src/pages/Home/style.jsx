import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #564865;
  border-radius: 1.25em;
  padding: 1.25em;
  width: 100%;
  max-width: 37.5em;
  margin: 8em auto;
  box-sizing: border-box;
`;

export const HomeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625em;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2em;
  margin-bottom: 1.25em;
`;

export const Content = styled.div`
  display: flex;
  gap: 1.25em;
`;
