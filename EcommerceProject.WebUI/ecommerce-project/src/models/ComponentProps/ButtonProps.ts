import { SxProps, Theme } from "@mui/material";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  sx?: SxProps<Theme>;
}
