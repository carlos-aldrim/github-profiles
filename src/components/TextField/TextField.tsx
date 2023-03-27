import React from "react";
import { useStyles } from "./TextField.styles";

interface TextFieldProps {
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  onKeyDown?: (event: any) => void;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  placeholder?: string;
  helpText?: string;
};

export const TextField: React.FC<TextFieldProps> = ({
  name,
  value,
  onChange,
  required,
  onKeyDown,
  disabled,
  endAdornment,
  placeholder,
  helpText
}) => {
  const { TextInput } = useStyles();

  return (
    <TextInput
      id="text-field"
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      disabled={disabled}
      inputRef={(input) => input && input.focus()}
      InputProps={{
        endAdornment,
      }}
      helperText={helpText}
    />
  );
};