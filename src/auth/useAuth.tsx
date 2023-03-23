import * as React from "react";

import AppContext from "../state/context";
import { setStorageUser, clearStorage } from "./storage";
import { User } from "../types";

const useAuth = () => {
  const {
    state: { user },
  } = React.useContext(AppContext);

  const login = (user: User) => {
    setStorageUser(user);
    window.location.href = "/home";
  };

  const logOut = () => {
    clearStorage();
    window.location.href = "/home";
  };

  return { user, login, logOut };
};

export default useAuth;
