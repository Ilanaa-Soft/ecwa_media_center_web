import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
        h2: {
          margin: 0,
          fontSize: "20px",
          fontWeight: "500",
        },
        p: {
          margin: 0,
        },
        ol: {
          margin: 0,
          marginTop: "8px",
          marginBottom: "8px",
        },
      },
    },
  },
});

export default theme;
