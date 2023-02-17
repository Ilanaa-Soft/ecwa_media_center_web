import * as React from "react";

import reducer from "./reducer";
import AppContext from "./context";

type AppProviderProps = {
  children: React.ReactNode;
};

const initialState: AppState = {
  manuals: [],
  user: null,
  hymns: [],
}

const AppProvider = ({ children }: AppProviderProps) => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
