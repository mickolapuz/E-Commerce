import { SxProps, Theme } from "@mui/material";

export interface TextInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}
