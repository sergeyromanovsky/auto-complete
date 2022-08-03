import * as Styled from "./styled";

export interface ControlProps {
  isMenuOpen: boolean;
  inputValue?: string;
  placeholder?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showMenu: () => void;
}

const Control = ({
  isMenuOpen,
  inputValue,
  onInputChange,
  placeholder,
  showMenu,
}: ControlProps) => {
  return (
    <Styled.Wrapper isMenuOpen={isMenuOpen} onClick={showMenu}>
      <Styled.Input
        value={inputValue}
        onChange={onInputChange}
        placeholder={placeholder}
      />
      <Styled.ArrowIcon $isMenuOpen={isMenuOpen} />
    </Styled.Wrapper>
  );
};

export default Control;
