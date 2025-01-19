import { ColorType } from "../../theme/colors";

export interface ChipProps {
  color?: ColorType;
  label: string;
  onClick?: VoidFunction;
}
