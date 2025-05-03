import { SxProps, Theme } from "@mui/material";

export interface TextInputProps {
  label: string;
  value: string | number;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: boolean;
  size?: "small" | "medium" | undefined;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}
