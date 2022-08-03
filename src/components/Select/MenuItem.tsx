import { Option } from 'types/Option';
import { hightlightMatchedText } from "utils/highlightMatchedText";
import * as Styled from "./styled";

export interface MenuItemProps extends Option {
  onClick: (option: Option) => void;
  isSelected: boolean;
  inputValue: string;
}

const MenuItem = ({
  label,
  value,
  onClick,
  isSelected,
  inputValue,
}: MenuItemProps) => {
  const handleClick = () => onClick({ value, label });

  return (
    <Styled.MenuItem
      onClick={handleClick}
      isSelected={isSelected}
      dangerouslySetInnerHTML={{
        __html: hightlightMatchedText(label, inputValue),
      }}
    />
  );
};

export default MenuItem;
