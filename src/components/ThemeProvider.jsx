import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#010101;",
      light: "#010101;",
      dark: "#010101;",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#FFF",
      light: "#FFF",
      dark: "#FFF",
      contrastText: "#010101",
    },
    tertiary: {
      main: "#E42433",
      light: "#E42433",
      dark: "#E42433",
      contrastText: "#FFF",
    },
  },
  typography: {
    h1: {
      fontFamily: "Rakkas, cursive",
      fontSize: "150px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      textTransform: "uppercase",
      color: "#FFF",
      "@media (max-width:600px)": {
        fontSize: "75px",
        lineHeight: "100%",
      },
    },
    h2: {
      fontFamily: "Rakkas, cursive",
      fontSize: "52px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "130%",
      textTransform: "uppercase",
      color: "#FFF",
      "@media (max-width:600px)": {
        fontSize: "32px",
        lineHeight: "90%",
      },
    },
    h3: {
      fontFamily: "Rakkas, cursive",
      fontSize: "42px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "110%",
      color: "#E42433",
      "@media (max-width:600px)": {
        fontSize: "28px",
        lineHeight: "80%",
      },
    },

    body1: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "80%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    body2: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "80%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    body3: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "80%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    body4: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "160%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "120%",
      },
    },

    body5: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "80%",
      color: "#FFF",
      "@media (max-width:600px)": {
        lineHeight: "50%",
      },
    },

    button: {
      fontFamily: "Roboto Flex, sans-serif",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 600,
      textTransform: "uppercase",
      "@media (max-width:600px)": {
        fontSize: "15px",
        lineHeight: "22.5px",
      },
    },
  },
});
