import { styled } from "@mui/system";
import { ValueContext } from "contexts";
import React from "react";

export const useStyles = () => {
  const { getTheme } = React.useContext(ValueContext);
  const colors = getTheme();

  const Main = styled("div")({
    display: "flex",
    backgroundColor: colors.backgroundPrimary,
    height: "calc(100vh - 32px)",
    padding: 16,
  });

  return { Main };
};

export default useStyles;