import React, { useState, useCallback, useRef } from "react";
import { useOnClickOutside } from "hooks/useOnClickOutside";
import { Box } from "react-styled-flex";
import Control from "./Control";
import Menu from "./Menu";
import { Option, OptionConstraint } from 'types/Option';

export type SelectProps<T> = {
  onInputChange?: (value: string) => void;
  onSelect: (option: Option) => void;
  options?: T[];
  placeholder?: string;
  isLoading?: boolean;
} & AdditionalProps<T>;

type AdditionalProps<T> = T extends { label: string }
  ? {
      getOptionLabel?: (option: T) => string;
      getOptionValue?: (option: T) => string;
    }
  : {
      getOptionLabel: (option: T) => string;
      getOptionValue: (option: T) => string;
    };

const Select = <T extends OptionConstraint>({
  onInputChange,
  options,
  onSelect,
  getOptionLabel,
  getOptionValue,
  placeholder,
  isLoading,
}: SelectProps<T>) => {
  const [inputValue, setInputValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const selectRef = useRef<HTMLDivElement>(null);

  const showMenu = useCallback(() => setIsMenuOpen(true), []);
  const hideMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setInputValue(value);
    onInputChange?.(value);
  };

  const handleSelectItem = useCallback(
    ({ label, value }: Option) => {
      setInputValue(label);
      onSelect({ label, value });
      setSelectedOption({ label, value });
      hideMenu();
    },
    [onSelect, hideMenu]
  );

  useOnClickOutside(selectRef, hideMenu);

  return (
    <Box width="100%" position="relative" ref={selectRef}>
      <Control
        isMenuOpen={isMenuOpen}
        onInputChange={handleInputChange}
        inputValue={inputValue}
        showMenu={showMenu}
        placeholder={placeholder}
      />
      {isMenuOpen && (
        <Menu
          isLoading={isLoading}
          options={options}
          onClick={handleSelectItem}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          selectedOption={selectedOption}
          hideMenu={hideMenu}
          inputValue={inputValue}
        />
      )}
    </Box>
  );
};

export default Select;
