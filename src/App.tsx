import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplateMui from "react-alert-template-mui";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navigation } from "./navigation";
import Loading from "./components/Loading";
import Error from "./components/Error";
import RouteScrollToTop from "./components/RouteScrollToTop";
import { getUser } from "./auth/storage";
import useAppApi from "./hooks/useAppApi";
import theme from "./theme/theme";

const alertOptions = {
  position: positions.MIDDLE,
};

function App() {
  const user = getUser();
  const isMountedRef = React.useRef(false);
  const { error, loading, request } = useAppApi();

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      if (user) request();
    }
  }, []);

  const handleTryAgain = () => request();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertProvider template={AlertTemplateMui} {...alertOptions}>
        <RouteScrollToTop />
        {loading && user ? (
          <Loading text="Please wait while we download your materials" />
        ) : (
          <>{error ? <Error onTryAgain={handleTryAgain} /> : <Navigation />}</>
        )}
        <ToastContainer position="bottom-left" hideProgressBar={true} />
      </AlertProvider>
    </ThemeProvider>
  );
}
//jjjj
export default App;
