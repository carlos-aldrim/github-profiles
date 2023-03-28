import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Card = styled("div")({
  width: "100%",
  "& hr": {
    background: "#8B949E",
    opacity: 0.25,
  },
});

export const Container = styled("div")({
  width: "calc(100% - 32px)",
  minHeight: "calc(3rem + 1vw)",
  padding: 16,
});

export const Title = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const Details = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "5px",
});

export const User = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textDecoration: "none",
  cursor: "pointer",
});

export const Image = styled("img")({
  borderRadius: "50%",
  width: "calc(3rem + 0.5vw)",
  height: "calc(3rem + 0.5vw)",
});

export const Name = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.55rem + 0.5vw)",
  lineHeight: 1.25,
  color: "#C9C1D9",
  fontWeight: 400,
  marginRight: "10px",
  "&:hover": {
    color: "#58A6FF",
  },
});

export const Login = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.5rem + 0.5vw)",
  lineHeight: 1.25,
  color: "#8B949E",
  fontWeight: 300,
  marginRight: "10px",
  "&:hover": {
    color: "#58A6FF",
  },
});

export const Bio = styled(Typography)({
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
});

export const Location = styled(Typography)({
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
  display: "flex",
  alignItems: "center",
  marginTop: "3px",
  "& svg": {
    margin: "-2px 5px 0px 0px",
    width: "calc(0.5rem + 0.5vw)",
  },
});