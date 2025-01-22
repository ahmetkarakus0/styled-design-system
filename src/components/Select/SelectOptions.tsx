import { memo } from "react";
import { StyledOption } from "./Select.styled";
import { SelectProps } from "./Select.types";

type PickedSelectProps<T> = Pick<
  SelectProps<T>,
  | "options"
  | "color"
  | "filled"
  | "getOptionValue"
  | "getOptionLabel"
  | "optionStyle"
>;

interface Props<T> extends PickedSelectProps<T> {
  onOptionClick: (val: T) => void;
}

const SelectOptions = <T,>(props: Props<T>) => {
  const {
    options,
    color,
    filled,
    getOptionLabel,
    getOptionValue,
    optionStyle,
    onOptionClick,
  } = props;

  if (options.length === 0) return <></>;

  return options.map((val) => (
    <StyledOption
      color={color}
      filled={filled}
      key={String(getOptionValue(val))}
      onClick={() => onOptionClick(val)}
      style={{
        ...optionStyle,
      }}
    >
      {String(getOptionLabel(val))}
    </StyledOption>
  ));
};

const MemoizedSelectOptions = memo(SelectOptions) as typeof SelectOptions;

export { MemoizedSelectOptions };
