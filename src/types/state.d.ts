type AppState = {
  user: User;
  hymns: Hymn[];
  manuals: Manual[];
};

type AppActionTypes =
  | { type: "SET_MANUALS"; payload: Manual[] }
  | { type: "SET_USER"; payload: User }
  | { type: "SET_APP_DATA"; payload: AppData };
