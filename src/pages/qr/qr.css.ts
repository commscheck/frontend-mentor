import { style } from "@vanilla-extract/css";
import Color from "color";

export const container = style({
  height: "100vh",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: Color({ h: 211, s: 45, l: 89 }).string(),
  fontFamily: ["Outfit", "sans-serif"].join(", "),
});

export const card = style({
  width: "320px",
  padding: "16px",
  borderRadius: "20px",
  backgroundColor: "white",
  textAlign: "center",
  boxShadow: ["0px", "25px", "25px", Color("black").alpha(0.05).string()] //
    .join(" "),
});

export const cardImage = style({
  borderRadius: "10px",
});

export const cardText = style({
  padding: "0 4px",
});

export const title = style({
  marginTop: "24px",
  fontSize: "1.4rem",
  fontWeight: 700,
  lineHeight: "1.8rem",
  color: Color({ h: 217, s: 44, l: 22 }).string(),
});

export const body = style({
  margin: ["16px", "16px", "24px"].join(" "),
  fontSize: "0.938rem",
  lineHeight: "1.188rem",
  color: Color({ h: 219, s: 15, l: 55 }).string(),
  letterSpacing: "0.1875px",
});
