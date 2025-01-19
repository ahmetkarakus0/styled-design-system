import { ColorType } from "../../theme/colors";

export type ButtonVariant = "filled" | "outlined" | "text";

export interface ButtonProps {
  variant?: ButtonVariant;
  color?: ColorType;
}
