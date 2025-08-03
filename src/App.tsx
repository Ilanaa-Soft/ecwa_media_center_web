import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplateMui from "react-alert-template-mui";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "./state/context";
import { Navigation } from "./navigation";
import Loading from "./components/Loading";
import Error from "./components/Error";
import RouteScrollToTop from "./components/RouteScrollToTop";
import NetworkNotification from "./components/NetworkNotification";
import { getStorageUser, getStorageState } from "./auth/storage";
import useAppApi from "./hooks/useAppApi";
import useNetworkInfo from "./hooks/useNetworkInfo";
import theme from "./theme/theme";

const alertOptions = {
  position: positions.MIDDLE,
};

function App() {
  const user = getStorageUser();
  const storageState = getStorageState();
  const { dispatch } = React.useContext(AppContext);
  const isMountedRef = React.useRef(false);
  const { error, loading, request } = useAppApi();
  const isOnline = useNetworkInfo();

  React.useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;

      if (user && storageState) {
        dispatch({
          type: "SET_INITIAL_STATE",
          payload: { user, ...storageState },
        });
      }
      if (user && isOnline) request();
    }
  }, [user, request, storageState, dispatch, isOnline]);

  const handleTryAgain = () => {
    request();
  };
//hi
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AlertProvider template={AlertTemplateMui} {...alertOptions}>
        {loading && user && !storageState ? (
          <Loading text="Please wait while we download your materials" />
        ) : (
          <>
            {error && !storageState ? (
              <Error onTryAgain={handleTryAgain} />
            ) : (
              <Navigation />
            )}
          </>
        )}
        <RouteScrollToTop />
        <NetworkNotification />
        <ToastContainer position="bottom-left" hideProgressBar={true} />
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;
