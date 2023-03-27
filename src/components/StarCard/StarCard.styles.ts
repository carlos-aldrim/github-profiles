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
  padding: 16,
});

export const Title = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const Name = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.75rem + 0.5vw)",
  lineHeight: 1.25,
  color: "#58A6FF",
  fontWeight: 600,
  marginRight: "10px",
});

export const Details = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "5px",
});

export const Description = styled(Typography)({
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
  marginRight: "16px",
});

export const DateUpdate = styled(Typography)({
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
});

export const Stargazers = styled(Typography)({
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "0px 10px 0px 0px",
  "& svg": {
    margin: "-2px 5px 0px 0px",
    width: "calc(0.25rem + 0.5vw)",
    color: "#8B949E",
  },
});

export const SubDescription = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "5px",
});

export const Fork = styled(Typography)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "0px 10px 0px 0px",
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
});

export const Icon = styled("img")({
  margin: "-2px 5px 0px 0px",
  width: "calc(0.25rem + 0.5vw)",
});