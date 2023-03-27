import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const Container = styled("div")({
  width: "max-content",
  padding: 16,
  display: "flex",
  justifyContent: "left",
  flexDirection: "column",
  marginRight: "calc(1rem + 1vw)",
});

export const Avatar = styled("div")({
  width: "75%",
  minWidth: "150px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const Image = styled("img")({
  borderRadius: "50%",
  width: "calc(7rem + 7vw)",
  zIndex: 4,
  border: "2px solid #8B949E",
});

export const Login = styled(Link)({
  fontFamily: "Roboto",
  marginBottom: "16px",
  fontSize: "calc(0.75rem + 0.5vw)",
  lineHeight: 1.25,
  color: "#8B949E",
  fontWeight: 300,
  cursor: "pointer",
  textDecoration: "none",
  width: "max-content",
});

export const Name = styled(Link)({
  fontFamily: "Roboto",
  marginTop: "16px",
  fontSize: "calc(1rem + 0.5vw)",
  lineHeight: 1.25,
  color: "#8B949E",
  fontWeight: 600,
  cursor: "pointer",
  textDecoration: "none",
  width: "max-content",
});

export const Details = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: "#8B949E",
  width: "max-content",
});

export const FollowersList = styled("div")({
  fontFamily: "Roboto",
  display: "flex",
  flexDirection: "row",
  fontSize: "calc(0.5rem + 0.5vw)",
  lineHeight: 1.25,
  cursor: "pointer",
  alignItems: "center",
  marginRight: "5px",
  color: "#8B949E",
  "& svg": {
    color: "#8B949E",
    marginRight: "5px",
  },
  "&:hover": {
    "& svg": {
      color: "#58A6FF",
    },
    color: "#58A6FF",
  },
});

export const FollowingList = styled("div")({
  fontFamily: "Roboto",
  color: "#8B949E",
  fontSize: "calc(0.5rem + 0.5vw)",
  lineHeight: 1.25,
  cursor: "pointer",
  margin: "0px 5px",
  "&:hover": {
    color: "#58A6FF",
  },
});