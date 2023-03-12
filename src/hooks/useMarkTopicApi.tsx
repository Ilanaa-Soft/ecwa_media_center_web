import * as React from "react";
import AppContext from "../state/context";
import { markTopicAsRead } from "../services/manualsService";
import { getDashboard } from "../services/userService";

const useMarkTopicApi = () => {
  const { dispatch } = React.useContext(AppContext);

  const request = async (topic: any) => {
    try {
      await markTopicAsRead(topic.id);
      const { data: dashboard } = await getDashboard();

      dispatch({ type: "SET_DASHBOARD", payload: dashboard });
    } catch (ex) {}
  };

  return { request };
};

export default useMarkTopicApi;
