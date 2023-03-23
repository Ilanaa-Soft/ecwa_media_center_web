import { User, Manual, Hymn, Dashboard } from "../types";

type StorageState = {
  manuals: Manual[];
  hymns: Hymn[];
  dashboard: Dashboard;
};

export const storeUser = (user: User) => {
  const userStr = JSON.stringify(user);
  localStorage.setItem("user", userStr);
};

export const getUser = () => {
  const userStr = localStorage.getItem("user");

  if (!userStr) return null;

  return JSON.parse(userStr) as User;
};

export const setStorageState = (state: StorageState) => {
  const stateStr = JSON.stringify(state);
  localStorage.setItem("state", stateStr);
};

export const getStorageState = () => {
  const stateStr = localStorage.getItem("state");

  if (!stateStr) return null;

  return JSON.parse(stateStr) as StorageState;
};

export const updateStorageManuals = (manuals: Manual[]) => {
  const storageState = getStorageState();

  if (storageState) {
    const stateStr = JSON.stringify({ ...storageState, manuals });
    localStorage.setItem("state", stateStr);
  }
};

export const removeUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("state");
};
