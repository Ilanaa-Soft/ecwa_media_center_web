import * as React from "react";

type AppContext = {
  state: AppState;
  dispatch: React.Dispatch<AppActionTypes>;
};

const AuthContext = React.createContext({} as AppContext);

export default AuthContext;
