import * as React from "react";

import reducer from "./reducer";
import AppContext from "./context";
import { AppState, Dashboard, User } from "../types";

type AppProviderProps = {
  children: React.ReactNode;
};

const appState: AppState = {
  manuals: [],
  user: {} as User,
  hymns: [],
  manualPayInfo: null,
  dashboard: {} as Dashboard,
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = React.useReducer(reducer, appState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
