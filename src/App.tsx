import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navigation } from "./navigation";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { getUser } from "./auth/storage";
import useAppApi from "./hooks/useAppApi";

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
    <>
      {loading && user ? (
        <Loading text="Please wait while we download your materials" />
      ) : (
        <>{error ? <Error onTryAgain={handleTryAgain} /> : <Navigation />}</>
      )}
      <ToastContainer position="bottom-left" hideProgressBar={true} />
    </>
  );
}

export default App;
