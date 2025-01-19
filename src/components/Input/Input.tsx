import { FC, InputHTMLAttributes } from "react";
import { StyledInput } from "./Input.styled";
import { InputProps } from "./Input.types";

const Input: FC<InputProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  color,
  filled,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label style={{ display: "block", marginBottom: "8px" }}>{label}</label>
      )}
      <StyledInput color={color} filled={filled} {...rest} />
    </div>
  );
};

export default Input;
