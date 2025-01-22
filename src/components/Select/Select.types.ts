import { CSSProperties } from "react";
import { ColorType } from "../../theme/colors";

export interface StyledSelectProps {
  color?: ColorType;
  filled?: boolean;
}

export interface SelectProps<T> extends StyledSelectProps {
  label?: string;
  options: T[];
  getOptionValue: (option: T) => T[keyof T];
  getOptionLabel: (option: T) => T[keyof T];
  value?: T;
  onChange?: (value: T) => void;
  selectButtonStyle?: CSSProperties;
  dropdownStyle?: CSSProperties;
  optionStyle?: CSSProperties;
}
