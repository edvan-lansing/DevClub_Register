import React from "react";
import { StyledButton } from './styles';

export const Button = ({
    children,
    icon,
    iconPosition = "left",
    fullWidth = false,
    color,
    size = "medium",
    ...props
}) => (
  <StyledButton
    fullWidth={fullWidth}
    color={color}
    size={size}
    {...props}
  >
    {icon && iconPosition === "left" && <span className="icon">{icon}</span>}
    {children && <span className="label">{children}</span>}
    {icon && iconPosition === "right" && <span className="icon">{icon}</span>}
  </StyledButton>
);
