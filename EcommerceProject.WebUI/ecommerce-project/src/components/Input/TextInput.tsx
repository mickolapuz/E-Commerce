import React from "react";
import TextField from "@mui/material/TextField";
import { TextInputProps } from "../../models/ComponentProps/TextInputProps";

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  error = false,
  helperText = "",
  fullWidth = true,
  disabled = false,
  sx = {}
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      type={type}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      disabled={disabled}
      variant="outlined"
      sx={sx}
    />
  );
};

export default TextInput;
