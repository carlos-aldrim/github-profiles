import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { ValueContext } from "contexts";
import React from "react";

export const useStyles = () => {
  const { getTheme } = React.useContext(ValueContext);
  const colors = getTheme();

  const Container = styled("div")({
    position: "fixed",
    zIndex: 100,
    top: 0,
    left: 0,
    width: "calc(100% - 36px)",
    height: "auto",
    backgroundColor: colors.backgroundSecondary,
    padding: "18px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& svg": {
      color: colors.fontColorPrimary,
      width: "auto",
      height: "75%",
    },
  });
  
  const LabelText = styled(Typography)({
    marginLeft: "10px",
    fontSize: "calc(0.75rem + 0.5vw)",
    color: colors.fontColorPrimary,
    fontWeight: 700,
  });
  
  const Logo = styled("img") ({
    filter: colors.filterLogo,
  });
  
  const Title = styled("div") ({
    display: "flex",
    flexDirection: "row",
    marginRight: "25px",
    minWidth: "180px",
  });
  
  const Search = styled("div") ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media (min-width: 1200px)": {
      "& div": {
        width: "400px",
        "& p": {
          color: "#FF0000",
          margin: "0px 0px 0px 2px",
          fontSize: "calc(0.5rem + 0.25vw)",
        },
      }
    },
  });

  return { Container, LabelText, Logo, Search, Title };
};

export default useStyles;