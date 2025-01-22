import { useState } from "react";
import { StyledDropdown, StyledSelectButton } from "./Select.styled";
import { SelectProps } from "./Select.types";
import { MemoizedSelectOptions } from "./SelectOptions";

const Select = <T,>(props: SelectProps<T>) => {
  const {
    color,
    filled,
    label,
    options,
    getOptionLabel,
    getOptionValue,
    selectButtonStyle,
    dropdownStyle,
    optionStyle,
    value,
    onChange,
  } = props;

  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value || options[0]);

  const onOptionClick = (val: T) => {
    setSelectedOption(val);
    setSelectOpen(false);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {label && (
        <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      )}
      <StyledSelectButton
        style={{
          ...selectButtonStyle,
        }}
        color={color}
        filled={filled}
        onClick={() => {
          setSelectOpen((prev) => !prev);
        }}
      >
        {String(getOptionLabel(selectedOption))}
      </StyledSelectButton>
      <StyledDropdown
        isOpen={selectOpen}
        style={{
          ...dropdownStyle,
        }}
      >
        <MemoizedSelectOptions<T>
          options={options}
          color={color}
          filled={filled}
          getOptionLabel={getOptionLabel}
          getOptionValue={getOptionValue}
          optionStyle={optionStyle}
          onOptionClick={onOptionClick}
        />
      </StyledDropdown>
    </div>
  );
};

export default Select;
