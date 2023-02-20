type AppState = {
  user: User;
  hymns: Hymn[];
  manuals: Manual[];
  manualPayInfo: ManualPayInfo;
};

type AppActionTypes =
  | { type: "SET_MANUALS"; payload: Manual[] }
  | { type: "SET_USER"; payload: User }
  | { type: "SET_APP_DATA"; payload: AppData }
  | { type: "SET_MANUAL_PAYMENT"; payload: ManualPayInfo };
