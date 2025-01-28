import { ColorType } from "../../theme/colors";

export interface TypographyProps {
  children: React.ReactNode;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "subtitle"
    | "subtitle2"
    | "body"
    | "body2"
    | "caption";
  color?: ColorType;
}
