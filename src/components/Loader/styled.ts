import styled from "styled-components";

export const Loader = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  border-radius: 50%;
  border: 6px solid ${({ theme }) => theme.colors.main.blue};
  border-color: ${({ theme }) => theme.colors.main.blue} transparent
    ${({ theme }) => theme.colors.main.blue} transparent;
  animation: rotate 1.2s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
