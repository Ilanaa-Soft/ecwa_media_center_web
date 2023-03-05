import * as React from "react";

import AppContext from "../state/context";
import { getUser } from "../auth/storage";
import { getAllManuals, getUnPaidManuals } from "../services/manualsService";
import { getAllHymns } from "../services/hymnsService";

const useAppApi = () => {
  const { dispatch } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const user = getUser();

  const request = async () => {
    setLoading(true);
    setError(false);
    try {
      const requests = [getAllManuals(), getUnPaidManuals(), getAllHymns()];
      const responses = await Promise.all(requests);

      const { data: allManuals } = responses[0];
      const { data: unPaidManuals } = responses[1];
      const { data: hymns } = responses[2];
      const manuals = [...allManuals, ...unPaidManuals];

      dispatch({
        type: "SET_INITIAL_STATE",
        payload: { user, manuals, hymns },
      });
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  return { error, loading, request };
};

export default useAppApi;
