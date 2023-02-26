import * as React from "react";

import AppContext from "../state/context";
import { storeUser } from "./storage";
import { User } from "../types";

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
