import * as React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppContext from "./state/context";
import { Navigation } from "./navigation";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { getUser } from "./auth/storage";
import { getAllManuals, getUnPaidManuals } from "./services/ManualsService";
import { getAllHymns } from "./services/hymnsService";

function App() {
  const { dispatch } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(false);
  const [hasError, setError] = React.useState(false);

  const user = getUser();

  React.useEffect(() => {
    if (user) fetch();
  }, []);

  const fetch = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data: allManuals } = await getAllManuals();
      const { data: unPaidManuals } = await getUnPaidManuals();
      const { data: hymns } = await getAllHymns();

      const manuals = [...allManuals, ...unPaidManuals];
      dispatch({ type: "SET_APP_DATA", payload: { user, manuals, hymns } });
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  const handleTryAgain = () => {
    fetch();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>{hasError ? <Error onTryAgain={handleTryAgain} /> : <Navigation />}</>
      )}
      <ToastContainer position="bottom-left" hideProgressBar={true} />
    </>
  );
}

export default App;
