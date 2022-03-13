import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  height: "100vh",
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#222222",
  backgroundColor: "#f7f7f7",
  fontFamily: "'Outfit', sans-serif",
});

export const card = style({
  maxWidth: "20rem",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundColor: "white",
  textAlign: "center",
});

globalStyle(`${card} > h1`, {
  marginBottom: "8px",
  padding: "16px",
  backgroundColor: "#f7c948",
  fontSize: "1.8rem",
});

globalStyle(`${card} > *:not(h1)`, {
  padding: "8px",
});

export const menu = style({});

globalStyle(`${menu} a`, {
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle(`${menu} > li`, {
  margin: "8px",
  borderRadius: "8px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "space-between",
  color: "white",
  fontWeight: "500",
  cursor: "pointer",
});

globalStyle(`${menu} > li > *`, {
  display: "block",
  padding: "8px 16px",
  backgroundColor: "#127fbf",
  transition: "background-color 0.3s ease",
});

globalStyle(`${menu} > li > *:hover`, {
  backgroundColor: "#1992d4",
});

globalStyle(`${menu} > li > *:first-child`, {
  textAlign: "left",
  flex: 1,
});

export const infoIcon = style({
  width: "1.5rem",
  height: "1.5rem",
});
