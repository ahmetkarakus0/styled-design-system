import { FC, HTMLAttributes } from "react";
import { StyledAlert } from "./Alert.styles";
import { AlertProps } from "./Alert.types";

const Alert: FC<AlertProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <StyledAlert {...props}>{children}</StyledAlert>;
};

export default Alert;
