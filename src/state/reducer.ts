import { Hymn } from "../types/hymn";
import { Manual, ManualPayInfo } from "../types/manual";
import { Dashboard, User } from "../types/user";

export type AppState = {
  user: User;
  hymns: Hymn[];
  manuals: Manual[];
  manualPayInfo?: ManualPayInfo | null;
  dashboard: Dashboard;
};

export type AppActionTypes =
  | { type: "SET_MANUALS"; payload: Manual[] }
  | { type: "SET_USER"; payload: User }
  | { type: "SET_INITIAL_STATE"; payload: AppState }
  | { type: "SET_MANUAL_PAYMENT"; payload: ManualPayInfo }
  | { type: "SET_DASHBOARD"; payload: Dashboard };

const reducer = (state: AppState, action: AppActionTypes) => {
  switch (action.type) {
    case "SET_INITIAL_STATE":
      return {
        ...state,
        user: action.payload.user,
        manuals: action.payload.manuals,
        hymns: action.payload.hymns,
        dashboard: action.payload.dashboard,
      };

    case "SET_MANUALS":
      return {
        ...state,
        manuals: action.payload,
        manualPayInfo: null,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "SET_MANUAL_PAYMENT":
      return {
        ...state,
        manualPayInfo: action.payload,
      };

    case "SET_DASHBOARD":
      return {
        ...state,
        dashboard: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
