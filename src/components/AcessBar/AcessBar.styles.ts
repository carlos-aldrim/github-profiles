import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ValueContext } from "contexts";
import React from "react";

export const useStyles = () => {
  const { getTheme } = React.useContext(ValueContext);
  const colors = getTheme();

  const Container = styled("div")({
    height: "auto",
    width: "calc(100% - 20px)",
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    "& hr": {
      width: "calc(100vw - 20px)",
      position: "absolute",
      top: "130px",
      left: 0,
      zIndex: 2,
      background: colors.backgroundTag,
      opacity: 0.25,
    },
  });
  
  const Button = styled(Typography)({
    fontSize: "calc(0.5rem + 0.5vw)",
    color: colors.fontColorSecondary,
    fontWeight: 400,
    maxWidth: "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.1rem 0.5rem",
    borderRadius: "0.2rem",
    marginRight: "12px",
    "&:hover": {
      background: colors.backgroundButton,
    },
    "& svg": {
      width: "calc(0.5rem + 0.5vw)",
      color: colors.fontColorSecondary,
      margin: "-1px 3px 0px 0px",
    },
  });
  
  const Tag = styled("div")({
    height: "calc(0.5rem + 0.5vw)",
    fontSize: "calc(0.25rem + 0.5vw)",
    marginLeft: "8px",
    padding: "0.1rem 0.3rem",
    background: colors.backgroundTag,
    borderRadius: "0.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  return { Container, Button, Tag };
};

export default useStyles;
