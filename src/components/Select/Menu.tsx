import { useMemo } from "react";
import Loader from "components/Loader";
import { Box } from "react-styled-flex";
import * as Styled from "./styled";
import MenuItem from "./MenuItem";
import { Option, OptionConstraint } from "types/Option";

export interface MenuProps<T> {
  options?: T[];
  onClick: (option: Option) => void;
  getOptionLabel?: (option: T) => string;
  getOptionValue?: (option: T) => string;
  isLoading?: boolean;
  selectedOption: Option | null;
  inputValue: string;
  hideMenu: () => void;
}

const Menu = <T extends OptionConstraint>({
  options,
  onClick,
  getOptionLabel,
  getOptionValue,
  isLoading,
  selectedOption,
  inputValue,
}: MenuProps<T>) => {
  const memoizedOptions = useMemo(() => {
    return options?.map((option) => {
      const label = getOptionLabel?.(option) || option.label!; // we know that option.label should exist if getOptionLabel is undefined
      const value = getOptionValue?.(option) || option.value?.toString()!; // we know that option.value should exist if getOptionValue is undefined

      return (
        <MenuItem
          key={option.id}
          label={label}
          value={value}
          onClick={onClick}
          isSelected={selectedOption?.value === option.id.toString()}
          inputValue={inputValue}
        />
      );
    });
  }, [
    options,
    onClick,
    getOptionLabel,
    getOptionValue,
    selectedOption,
    inputValue,
  ]);

  const getChildren = () => {
    if (isLoading) {
      return (
        <Box padding="16px">
          <Loader />
        </Box>
      );
    }
    if (options?.length === 0) {
      return (
        <Box padding="16px">
          <Styled.NotFoundText>No options found</Styled.NotFoundText>
        </Box>
      );
    }
    return memoizedOptions;
  };

  return <Styled.Menu>{getChildren()}</Styled.Menu>;
};

export default Menu;
