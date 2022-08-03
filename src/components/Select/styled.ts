import styled from "styled-components";
import { ReactComponent as _ArrowIcon } from "assets/icons/down.svg";

export const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  border-radius: 4px;
  padding: 0 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  height: 48px;
  border: 1px solid
    ${({ isMenuOpen, theme: { colors } }) =>
      isMenuOpen ? colors.main.blue : colors.line.grey};
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  caret-color: ${({ theme }) => theme.colors.main.blue};
  color: ${({ theme }) => theme.colors.text.dark};
  font-size: 14px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.dark};
  }
`;

export const Menu = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.main.blue};
  position: absolute;
  z-index: 100;
  width: 100%;
  max-height: 400px;
  overflow-y: auto;
  margin-top: 8px;
`;

export const MenuItem = styled.div<{ isSelected: boolean }>`
  padding: 14px 16px;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.colors.text.dark};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
    background: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.main.blue : ""};
  }

  &:hover {
    &:before {
      background: ${({ theme }) => theme.colors.main.blue};
    }
  }
`;

export const NotFoundText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.dark};
`;

export const ArrowIcon = styled(_ArrowIcon)<{ $isMenuOpen: boolean }>`
  transition: 0.3s;
  transform: rotateZ(${({ $isMenuOpen }) => ($isMenuOpen ? "180deg" : "0")});
`;
