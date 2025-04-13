import React from "react";
import Button from "@mui/material/Button";
import { ButtonProps } from "../../models/ComponentProps/ButtonProps";

const CustomButton: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "contained",
  color = "primary",
  size = "medium",
  disabled = false,
  sx = {}
}) => {
  return (
    <Button variant={variant} color={color} size={size} onClick={onClick} disabled={disabled} sx={sx}>
      {label}
    </Button>
  );
};

export default CustomButton;
