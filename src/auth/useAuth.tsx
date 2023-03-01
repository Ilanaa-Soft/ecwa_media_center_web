import * as React from "react";

import AppContext from "../state/context";
import { storeUser, removeUser } from "./storage";
import { User } from "../types";

const useAuth = () => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  const login = (user: User) => {
    storeUser(user);
  };

  const logOut = () => {
    removeUser();
  };

  return { user, login, logOut };
};

export default useAuth;
