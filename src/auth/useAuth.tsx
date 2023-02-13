import * as React from "react";

import AppContext from "./context";
import { storeUser } from "./storage";

const useAuth = () => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  const login = async (user: User) => {
    storeUser(user);
  };

  return { user, login };
};

export default useAuth;
