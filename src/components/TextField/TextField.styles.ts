import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { ValueContext } from "contexts";
import React from "react";

export const useStyles = () => {
  const { getTheme } = React.useContext(ValueContext);
  const colors = getTheme();

  const TextInput = styled(TextField)({
    cursor: "text",
    margin: "0.25em",
    width: "calc(100% - 0.5em)",
    "& .MuiOutlinedInput-root": {
      color: colors.fontColorPrimary,
      "& fieldset": {
        backgroundColor: colors.backgroundPrimary,
        borderRadius: "4px",
        border: "1px solid",
        borderColor: colors.borderColor,
        "&.MuiOutlinedInput-notchedOutline": {
          border: "1px solid",
          borderColor: colors.borderColor,
        },
      },
      "&:hover fieldset": {
        border: "1px solid",
        borderColor: colors.borderColor,
      },
      "&.Mui-focused fieldset": {
        border: "1px solid",
        borderColor: colors.borderColor,
      },
    },
    "& input": {
      cursor: "text",
      zIndex: 10,
      padding: 0,
      "&:focus": {
        color: "#C9D1D9",
      },
    },
    "& svg": {
      color: "colors.fontColorInput",
      zIndex: 10,
      width: "0.5em",
      height: "0.5em",
      "&:focus": {
        color: "#C9D1D9",
      },
    },
    "& div": {
      width: "100%",
      height: "26px",
      fontSize: "calc(0.5rem + 0.5vw)",
      padding: "0px 12px",
      fontWeight: 300,
    },
  });

  return { TextInput };
};

export default useStyles;