import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #fffaf3;
`;

export const Spinner = styled.div`
  width: 38px;
  height: 38px;

  border: 3px solid #f1dfd1;
  border-top-color: #ff8a4c;

  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;
`;