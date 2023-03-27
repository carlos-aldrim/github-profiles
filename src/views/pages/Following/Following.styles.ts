import { styled } from "@mui/system";
import { ValueContext } from "contexts";
import React from "react";

export const useStyles = () => {
  const { getTheme } = React.useContext(ValueContext);
  const colors = getTheme();

  const Main = styled("div")({
    display: "flex",
    backgroundColor: colors.backgroundPrimary,
    minHeight: "calc(100vh - 106px)",
    padding: "90px 2.5vw 16px 2.5vw",
    flexDirection: "row",
  });

  const List = styled("div")({
    height: "auto",
    width: "100%",
  });

  return { Main, List };
};

export default useStyles;