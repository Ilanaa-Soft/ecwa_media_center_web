import * as React from "react";

import AppContext from "../state/context";
import { getUser, setStorageState } from "../auth/storage";
import { getAllManuals, getUnPaidManuals } from "../services/manualsService";
import { getAllHymns } from "../services/hymnsService";
import { getDashboard } from "../services/userService";
import { User } from "../types";

const useAppApi = () => {
  const { dispatch } = React.useContext(AppContext);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const user = getUser() as User;

  const request = async () => {
    setLoading(true);
    setError(false);
    try {
      const requests = [
        getAllManuals(),
        getUnPaidManuals(),
        getAllHymns(),
        getDashboard(),
      ];
      const responses = await Promise.all(requests);
      const { data: allManuals } = responses[0];
      const { data: unPaidManuals } = responses[1];
      const { data: hymns } = responses[2];
      const { data: dashboard } = responses[3];

      const manuals = [...allManuals, ...unPaidManuals];
      setStorageState({ manuals, hymns, dashboard });
      dispatch({
        type: "SET_INITIAL_STATE",
        payload: { user, manuals, hymns, dashboard },
      });
    } catch (ex) {
      setError(true);
    }
    setLoading(false);
  };

  return { error, loading, request };
};

export default useAppApi;
