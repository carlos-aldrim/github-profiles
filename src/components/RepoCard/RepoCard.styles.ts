import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Card = styled("div")({
  width: "100%",
  "& hr": {
    background: "#8B949E",
    opacity: 0.25,
  },
});

export const Container = styled(Link)({
  width: "calc(100% - 32px)",
  padding: 16,
  textDecoration: "none",
});

export const Title = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const Tag = styled("div")({
  border: "1px #8B949E solid",
  padding: "0px 7px",
  borderRadius: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Name = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "calc(0.75rem + 0.5vw)",
  lineHeight: 1.25,
  color: "#58A6FF",
  fontWeight: 600,
  marginRight: "10px",
});

export const Visibility = styled(Typography)({
  fontFamily: "Roboto",
  lineHeight: 1.25,
  fontSize: "calc(0.25rem + 0.5vw)",
  fontWeight: 400,
  color: "#8B949E",
});

export const Details = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "5px",
});

export const Color = styled("div")({
  width: "15px",
  height: "15px",
  marginRight: "5px",
  borderRadius: "100%",
});

export const Languagem = styled(Typography)({
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