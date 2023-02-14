import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplateMui from "react-alert-template-mui";

import AppProvider from "./auth/AppProvider";
import RouteScrollToTop from "./components/RouteScrollToTop";
import theme from "./theme/theme";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container as HTMLElement);

const alertOptions = {
  position: positions.MIDDLE,
};

root.render(
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AlertProvider template={AlertTemplateMui} {...alertOptions}>
          <RouteScrollToTop />
          <AppProvider>
            <App />
          </AppProvider>
        </AlertProvider>
      </ThemeProvider>
    </React.StrictMode>
  </Router>
);
